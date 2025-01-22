import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  TuiAddonDoc,
  TuiDocCode,
  TuiDocDemo,
  TuiDocDocumentation,
  TuiDocExample,
  TuiDocPage,
  TuiDocPageTabConnector,
} from '@taiga-ui/addon-doc';
import ExamplesComponent from './example';
import { MySetupComponent } from '../../utils/setup.component';
import ApiComponent from './api/index';

@Component({
  standalone: true,
  imports: [
    TuiDocPage,
    TuiAddonDoc,
    TuiDocCode,
    TuiDocDemo,
    TuiDocPageTabConnector,
    TuiDocDocumentation,
    TuiDocExample,
    ExamplesComponent,
    MySetupComponent,
    ApiComponent,
  ],
  templateUrl: 'index.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DocsComponent {}
