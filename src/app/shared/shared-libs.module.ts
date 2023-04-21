import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgZorroAntdModule } from './libs/ng-zorro-antd.module';

@NgModule({
  imports: [FormsModule, CommonModule, ReactiveFormsModule, TranslateModule, NgZorroAntdModule],
  exports: [FormsModule, CommonModule, ReactiveFormsModule, TranslateModule, NgZorroAntdModule],
})
export class SharedLibsModule {}
