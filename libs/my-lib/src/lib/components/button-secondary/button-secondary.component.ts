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
 *  Кнопка — это интерактивный элемент управления, который позволяет
    пользователям выполнять определенные действия при нажатии. В нашей
    библиотеке кнопка представлена компонентом button, который
    поддерживает различные стили оформления и может быть настроен под конкретные
    задачи вашего проекта.
 * 
 * Добавьте импорт:
 * ```typescript
 *import { MyButtonSecondaryComponent } from '@my-lib';
 * ```
*
*Добавьте в шаблон:
 * ```html
<my-button-secondary size="m">My button</my-button-secondary>
 * ```
* Ссылка на демо компонента:
 *https://stackblitzstartersfzuoilfq-v2um-qlzgt42v--4200--d20a0a75.local-corp.webcontainer.io/
 */

@Component({
  selector: 'my-button-secondary',
  imports: [],
  template: '<ng-content></ng-content>',
  styleUrl: './button-secondary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyButtonSecondaryComponent {
  /**
   * @ignore
   */
  host = inject(ElementRef).nativeElement;
  /**
   * @ignore
   */
  renderer = inject(Renderer2);

  /**
   * Параметр для опредления размеров текста в кнопке
   */
  size = input.required<keyof typeof Sizes>();

  /**
   * @ignore
   */
  ngOnInit() {
    this.renderer.setStyle(this.host, 'font-size', Sizes[this.size()]);
  }
}
