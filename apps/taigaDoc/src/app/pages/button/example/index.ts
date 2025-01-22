import { ChangeDetectionStrategy, Component } from '@angular/core';
import ExampleComponent from './1';
import { TuiDocExample, TuiRawLoaderContent } from '@taiga-ui/addon-doc';

@Component({
  standalone: true,
  imports: [ExampleComponent, TuiDocExample],
  selector: 'examples',
  templateUrl: './index.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExamplesComponent {
  readonly example: Record<string, TuiRawLoaderContent> = {
    TypeScript: import('./1/index.ts?raw'),
    HTML: import('./1/index.html?raw'),
  };
}
