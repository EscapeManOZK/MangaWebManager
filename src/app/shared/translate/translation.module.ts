import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateService, TranslateLoader, MissingTranslationHandler } from '@ngx-translate/core';
import { SessionStorageService } from 'ngx-webstorage';
import { translatePartialLoader, missingTranslationHandler } from './translation.config';

export const LANGS = ['en', 'fr'];

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translatePartialLoader,
        deps: [HttpClient],
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useFactory: missingTranslationHandler,
      },
    }),
  ],
})
export class TranslationModule {
  constructor(private translateService: TranslateService, sessionStorageService: SessionStorageService) {
    translateService.setDefaultLang('en');
    translateService.addLangs(LANGS);

    const browserLang = translateService.getBrowserLang();
    let defaultLang = 'en';
    if (browserLang) {
      defaultLang = browserLang? browserLang.match(/en|fr/) ? browserLang as string: 'en' : 'en';
    }
    // if user have changed language and navigates away from the application and back to the application then use previously choosed language
    const langKey = sessionStorageService.retrieve('locale') ?? defaultLang;
    translateService.use(langKey);
  }
}
