import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskInputControlComponent } from './mask-input-control.component';

describe('MaskInputControlComponent', () => {
  let component: MaskInputControlComponent;
  let fixture: ComponentFixture<MaskInputControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaskInputControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskInputControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
