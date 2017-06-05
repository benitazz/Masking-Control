import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaskInputControlComponent } from './mask-input-control/mask-input-control.component';
import { NgModule } from '@angular/core';
import { NumberInputComponent } from './number-input/number-input.component';
import { TextMaskModule } from 'angular2-text-mask';
import { TotalInputControlComponent } from './total-input-control/total-input-control.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberInputComponent,
    MaskInputControlComponent,
    TotalInputControlComponent
  ],
  exports:[ NumberInputComponent,
    MaskInputControlComponent,
    TotalInputControlComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
