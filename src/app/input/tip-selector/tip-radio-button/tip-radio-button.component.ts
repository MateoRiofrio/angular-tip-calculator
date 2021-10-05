import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tip-radio-button',
  templateUrl: 'tip-radio-button.component.html',
  styles: [
  ]
})
export class TipRadioButtonComponent implements OnInit {
  @Input() id: string = "";
  @Input() name: string = "";
  @Input() label: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
