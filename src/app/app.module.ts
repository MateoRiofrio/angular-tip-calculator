import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextInputWithLabelAndIconComponent } from './components/input-fields/text-input-with-label-and-icon/text-input-with-label-and-icon.component';
import { CustomInputWithLabelComponent } from './components/input-fields/custom-input-with-label/custom-input-with-label.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInputWithLabelAndIconComponent,
    CustomInputWithLabelComponent,
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
