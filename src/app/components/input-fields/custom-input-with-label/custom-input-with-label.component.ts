import { Attribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-input-with-label',
  template: `
    <input type={{type}} name={{name}}/>
		<label for={{name}}>{{
      labelText
    }}
    </label>
  `,
  styles: [
  ]
})
export class CustomInputWithLabelComponent {
  @Input() labelText: string = "LabelText";
  constructor(@Attribute('type') public type: string, @Attribute('name') public name: string) { }


}
