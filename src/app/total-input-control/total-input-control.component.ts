import { Component, Input, OnInit } from '@angular/core';

import { CalculationType } from '../calculation-type.enum';
import { MaskType } from '../mask-type.enum';
import { UnitMeasure } from '../unit-measure.enum';

@Component({
  selector: 'app-total-input-control',
  templateUrl: './total-input-control.component.html',
  styleUrls: ['./total-input-control.component.css']
})
export class TotalInputControlComponent implements OnInit {

  public xx: any;
  public yy: any;

  public UnitMeasure: UnitMeasure;

  @Input() set x(vaue: number) {
    this.xx = vaue;
    this.doCalculations();
  }
  @Input() set y(vaue: number) {
    this.yy = vaue;
    this.doCalculations();
  }
  @Input() calculationType: CalculationType;

  public maskType: MaskType;

  @Input() unitMeasureValue: string;

  public calculatedValue: number;
  constructor() { }

  public ngOnInit(): void {
    this.UnitMeasure = UnitMeasure.Right;
    this.maskType = MaskType.Decimal;
    this.doCalculations();
  }

  private doCalculations() {

    this.xx = !this.xx ? 0 : this.xx;
    this.yy = !this.yy ? 0 : this.yy;

    const xString = this.xx.toString().replace(/\s/g, '');
    const yString = this.yy.toString().replace(/\s/g, '');

    this.xx = Number(xString);
    this.yy = Number(yString);

    switch (this.calculationType) {
      case CalculationType.Addition: {
        this.calculatedValue = this.xx + this.yy;
      }
        break;
      case CalculationType.Subtraction: {
        this.calculatedValue = this.xx - this.yy;
      }
        break;
      case CalculationType.Multiplecation: {
        this.calculatedValue = this.xx * this.yy;
      }
        break;
      case CalculationType.Subtraction: {


        this.calculatedValue = this.xx / this.yy;
      }
        break;
    }
  }

}
