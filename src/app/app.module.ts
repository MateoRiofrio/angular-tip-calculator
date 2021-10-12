import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextInputWithLabelAndIconComponent } from './components/input-fields/text-input-with-label-and-icon/text-input-with-label-and-icon.component';
import { VerticalSpacerComponent } from './components/layout/vertical-spacer/vertical-spacer.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInputWithLabelAndIconComponent,
    VerticalSpacerComponent,
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
