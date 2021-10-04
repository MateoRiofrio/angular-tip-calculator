import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-label',
  template: `
    <p>
      text-label works!
    </p>
  `,
  styles: [
  ]
})
export class TextLabelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
