import {
  ApplicationConfig,
  inject,
  PLATFORM_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { isPlatformBrowser } from '@angular/common';
import {
  TUI_DOC_LOGO,
  TUI_DOC_PAGES,
  TUI_DOC_TITLE,
  tuiSortPages,
} from '@taiga-ui/addon-doc';
import { pages } from './pages';
import { LOGO_CONTENT } from '../assets/logo/logo.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideRouter(appRoutes),
    NG_EVENT_PLUGINS,
    {
      provide: HIGHLIGHT_OPTIONS,
      useFactory: () => {
        const isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
        return {
          coreLibraryLoader: async () => import('highlight.js/lib/core'),
          lineNumbersLoader: async () =>
            isBrowser
              ? import('ngx-highlightjs/line-numbers')
              : Promise.resolve(),
          languages: {
            typescript: () => import('highlight.js/lib/languages/typescript'),
            scss: () => import('highlight.js/lib/languages/scss'),
            xml: () => import('highlight.js/lib/languages/xml'),
          },
        };
      },
    },
    { provide: TUI_DOC_TITLE, useValue: 'Taiga-doc' },
    {
      provide: TUI_DOC_LOGO,
      useValue: LOGO_CONTENT,
    },
    {
      provide: TUI_DOC_PAGES,
      useValue: tuiSortPages(pages, new Set(['Overview', 'Components'])),
    },
  ],
};
