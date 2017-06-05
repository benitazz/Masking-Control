import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalInputControlComponent } from './total-input-control.component';

describe('TotalInputControlComponent', () => {
  let component: TotalInputControlComponent;
  let fixture: ComponentFixture<TotalInputControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalInputControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalInputControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
