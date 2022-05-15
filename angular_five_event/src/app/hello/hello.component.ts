import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Current Text: {{curr}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() curr: string | undefined;
}
