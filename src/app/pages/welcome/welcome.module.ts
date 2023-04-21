import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { TranslationModule } from 'src/app/shared/translate/translation.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [WelcomeRoutingModule, TranslationModule, SharedModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
