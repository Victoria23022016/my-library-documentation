import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiDocAPI, TuiDocAPIItem } from '@taiga-ui/addon-doc';

@Component({
  standalone: true,
  imports: [TuiDocAPI, TuiDocAPIItem],
  selector: 'api',
  templateUrl: './index.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ApiComponent {}
