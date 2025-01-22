import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  Renderer2,
} from '@angular/core';
import { Sizes } from '../../enums';

/**
 * API для ui-компонента my-button.
*@example
* Добавьте импорт:
```typescript
import { MyButtonComponent } from '@my-lib';
```
*@example
*Добавьте в шаблон:
```html
<my-button size="m">My button</my-button>
```
*/

@Component({
  selector: 'my-button',
  imports: [],
  template: '<ng-content></ng-content>',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyButtonComponent {
  /**
   * @internal
   */
  host = inject(ElementRef).nativeElement;
  /**
   * @internal
   */
  renderer = inject(Renderer2);

  /**
   * Параметр для опредления размеров текста в кнопке
   * @see `size`
   */
  size = input.required<keyof typeof Sizes>();

  /**
   * @internal
   */
  ngOnInit() {
    this.renderer.setStyle(this.host, 'font-size', Sizes[this.size()]);
  }
}
