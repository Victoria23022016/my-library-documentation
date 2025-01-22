import { TuiDocRoutePages } from '@taiga-ui/addon-doc';
import { TaigaDocRoute } from './taigaDoc-routes';

export const pages: TuiDocRoutePages = [
  {
    section: 'Overview',
    title: 'Getting started',
    route: TaigaDocRoute.GettingStarted,
  },
  {
    section: 'Components',
    title: 'Button',
    route: TaigaDocRoute.Button,
  },
];
