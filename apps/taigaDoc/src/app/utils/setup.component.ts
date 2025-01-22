import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  input,
} from '@angular/core';
import {
  TuiDocCode,
  TuiDocPage,
  TuiRawLoaderContent,
} from '@taiga-ui/addon-doc';
import { tuiPure } from '@taiga-ui/cdk';
import { toKebab } from './kebab.pipe';

@Component({
  standalone: true,
  imports: [TuiDocCode],
  selector: 'my-setup',
  template: `
    <ol>
      <li>
        <p>Добавьте импорты в компонент:</p>
        <tui-doc-code [code]="computedImport"></tui-doc-code>
      </li>
      <li>
        <p>Добавьте в шаблон:</p>
        <tui-doc-code [code]="computedTemplate"></tui-doc-code>
      </li>
    </ol>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MySetupComponent {
  private readonly page = inject(TuiDocPage);

  @Input() import: TuiRawLoaderContent = '';
  @Input() template: TuiRawLoaderContent = '';

  @tuiPure protected get computedImport(): TuiRawLoaderContent {
    return (
      this.import ||
      import(`../pages/${toKebab(this.page.header)}/import/import.md?raw`)
    );
  }

  @tuiPure protected get computedTemplate(): TuiRawLoaderContent {
    return (
      this.template ||
      import(`../pages/${toKebab(this.page.header)}/import/template.md?raw`)
    );
  }
}
