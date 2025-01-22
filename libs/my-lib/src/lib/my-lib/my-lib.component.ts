import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-my-lib',
  imports: [CommonModule],
  templateUrl: './my-lib.component.html',
  styleUrl: './my-lib.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyLibComponent {}
