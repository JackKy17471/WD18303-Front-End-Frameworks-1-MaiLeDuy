import {Component, Input} from '@angular/core';

@Component({
    selector: 'dialog',
    template: `<h1> Hello {{name}}! </h1>`,
  })
export class DialogComponent {
  [x: string]: any;
    @Input() name!: string
  nativelement: any;
}