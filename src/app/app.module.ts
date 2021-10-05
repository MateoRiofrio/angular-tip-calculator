import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TipRadioButtonComponent } from './input/tip-selector/tip-radio-button/tip-radio-button.component';
import { NumberTextFieldComponent } from './input/number-text-field/number-text-field.component';
import { BoxContainerComponent } from './container/box-container/box-container.component';
import { TextLabelComponent } from './output/text-label/text-label.component';

@NgModule({
  declarations: [
    AppComponent,
    TipRadioButtonComponent,
    NumberTextFieldComponent,
    BoxContainerComponent,
    TextLabelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
