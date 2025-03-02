import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyButtonComponent } from '@my-lib';

@Component({
  selector: 'app-button-demo',
  imports: [CommonModule, MyButtonComponent],
  templateUrl: './button-demo.component.html',
})
export class ButtonDemoComponent {}
