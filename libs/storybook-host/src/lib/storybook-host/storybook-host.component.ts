import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-storybook-host',
  imports: [CommonModule],
  templateUrl: './storybook-host.component.html',
  styleUrl: './storybook-host.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StorybookHostComponent {}
