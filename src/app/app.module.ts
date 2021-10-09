import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TipRadioButtonComponent } from './input/tip-selector/tip-radio-button/tip-radio-button.component';
import { BoxContainerComponent } from './container/box-container/box-container.component';
import { TextLabelComponent } from './output/text-label/text-label.component';
import { LabelIconTextFieldComponent } from './input/text-field/label-icon-text-field/label-icon-text-field.component';

@NgModule({
  declarations: [
    AppComponent,
    TipRadioButtonComponent,
    BoxContainerComponent,
    TextLabelComponent,
    LabelIconTextFieldComponent,
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
