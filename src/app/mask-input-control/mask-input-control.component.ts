import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { MaskType } from '../mask-type.enum';
import { UnitMeasure } from '../unit-measure.enum';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const noop = () => { };

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MaskInputControlComponent),
  multi: true
};

@Component({
  selector: 'app-mask-input-control',
  templateUrl: './mask-input-control.component.html',
  styleUrls: ['./mask-input-control.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class MaskInputControlComponent implements ControlValueAccessor, OnInit {

  public mask: any;
  private separator: string;
  @Input() isreadOnly: boolean;

  @Input() maskType: MaskType;

  @Input() UnitMeasureType: UnitMeasure;

  @Input() unitMeasureValue: string;

  public lefRight: any = UnitMeasure;

  public canApplyStyle: boolean;

  constructor() {
  }

  public ngOnInit(): void {

    if (!this.UnitMeasureType) {
      this.UnitMeasureType = UnitMeasure.None;
    }


    this.canApplyStyle = this.lefRight.None !== this.UnitMeasureType;

    this.separator = ' ';

    switch (this.maskType) {
      case MaskType.Integer: {
        this.mask = createNumberMask({
          prefix: '',
          thousandsSeparatorSymbol: this.separator,
          allowDecimal: false
        });
      } break;
      case MaskType.Decimal: {
        this.mask = createNumberMask({
          prefix: '',
          thousandsSeparatorSymbol: this.separator,
          allowDecimal: true,
          requireDecimal: true,
          allowLeadingZeroes: true
        });
      }
    }
  }

  private _onTouchedCallback: () => void = noop;

  private _onChangeCallback: (_: any) => void = noop;

  private _innerValue = '';

  set innerValue(val: any) {
    this._innerValue = val;

    if (this._innerValue) {
      switch (this.maskType) {
        case MaskType.Integer:
        case MaskType.Decimal: {
          const currentValue = this._innerValue.toString().replace(/\s/g, '');

          this._innerValue = currentValue;

          val = Number(this._innerValue);
        }
      }
    }
    this._onChangeCallback(val);
  }

  get innerValue(): any {
    return this._innerValue;
  }

  public onTouched = () => {
  }

  public writeValue(val: any) {
    if (val !== undefined) {
      if (this.maskType === MaskType.Integer) {
        val = val = Math.trunc(val);
      }
      this.innerValue = val;
    }
  }

  public registerOnChange(fn: any): void {
    this._onChangeCallback = fn;
  }

  public registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
  }
}
