import { Attribute, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input-with-label-and-icon',
  template: `
    <label for={{name}}>{{
      labelText
    }}</label><br>
    <input type="text" value={{value}} name={{name}}>
  `
})
export class TextInputWithLabelAndIconComponent {
  @Input() labelText: string = "LabelText"; 
  constructor(@Attribute('value') public value: string, @Attribute('name') public name: string) { 

  }
}
