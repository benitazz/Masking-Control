import { Component, OnInit } from '@angular/core';

import { CalculationType } from '../calculation-type.enum';
import { MaskType } from '../mask-type.enum';
import { UnitMeasure } from '../unit-measure.enum';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements OnInit {
  public numValue: number;
  public someValue: number;

  public integer: MaskType;
  public decimal: MaskType;

  public unitMeaseure: UnitMeasure;
  public calculationType: CalculationType;
  public quantity: Number;
  public price: Number;


  constructor() { }

  public ngOnInit(): void {
    this.price = 12.51;
    this.calculationType = CalculationType.Multiplecation;
    this.integer = MaskType.Integer;
    this.decimal = MaskType.Decimal;
    this.unitMeaseure = UnitMeasure.Left;

  }

  public testValue() {
    debugger;
    const t = this.price;
    const tt = this.quantity;
  }
}
