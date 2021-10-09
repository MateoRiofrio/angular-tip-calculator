import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoxContainerComponent } from './components/containers/box-container/box-container.component';
import { TextInputWithLabelAndIconComponent } from './components/input-fields/text-input-with-label-and-icon/text-input-with-label-and-icon.component';
import { InputWithLabelComponent } from './components/input-fields/input-with-label/input-with-label.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxContainerComponent,
    TextInputWithLabelAndIconComponent,
    InputWithLabelComponent,
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
