import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'mwa-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  public breadcrumbVisible = false;

  constructor(public translate: TranslateService,
    private router: Router) {
    this.translate.onLangChange.subscribe(() => {
      this.refresh();
    });
  }

  private refresh() {
    if (!this.breadcrumbVisible) {
      this.breadcrumbVisible = true;
    } else {
      this.breadcrumbVisible = false;
      setTimeout(()=> {
        this.breadcrumbVisible = true;
      },250);
    }
  }

  public translateFn (key:string): string {
    return this.translate.instant(key);
  }
}
