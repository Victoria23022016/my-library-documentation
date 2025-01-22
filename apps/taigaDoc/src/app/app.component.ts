import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TuiDocMain } from '@taiga-ui/addon-doc';

@Component({
  imports: [RouterModule, CommonModule, TuiDocMain],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
