import { Routes } from '@angular/router';
import { TaigaDocRoute } from './taigaDoc-routes';
import { tuiProvideRoutePageTab as route } from '@taiga-ui/addon-doc';

export const appRoutes: Routes = [
  route({
    path: TaigaDocRoute.GettingStarted,
    title: 'getting started',
    loadComponent: async () => import('./pages/getting-started'),
  }),
  route({
    path: '',
    title: 'getting started',
    loadComponent: async () => import('./pages/getting-started'),
  }),
  route({
    path: TaigaDocRoute.Button,
    title: 'button',
    loadComponent: async () => import('./pages/button'),
  }),
];
