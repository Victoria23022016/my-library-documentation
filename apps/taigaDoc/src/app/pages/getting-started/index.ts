import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TuiDocPage } from '@taiga-ui/addon-doc';

@Component({
  standalone: true,
  imports: [CommonModule, TuiDocPage],
  selector: 'getting-started',
  templateUrl: 'index.html',
})
export default class GettingStartedComponent {}
