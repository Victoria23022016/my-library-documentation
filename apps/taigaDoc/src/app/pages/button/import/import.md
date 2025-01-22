```ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MyButtonComponent } from '@my-lib';

@Component({
  standalone: true,
  imports: [MyButtonComponent],
  selector: 'example',
  templateUrl: './index.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExampleComponent {}
```
