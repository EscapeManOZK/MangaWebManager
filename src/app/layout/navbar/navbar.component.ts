import { Component } from '@angular/core';
import { HostListener } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';
import { LANGS } from 'src/app/shared/translate/translation.module';

@Component({
  selector: 'mwa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public visible = false;
  public theme = 'dark';
  public screenHeight = 0;
  public screenWidth = 0;
  public isLogin = false;
  public redlineResponsive = 400;
  public currentLang = 'EN';
  public langs = [] as string[];
  public langSubMenu = false;
  public adminSubMenu = false;
  public userSubMenu = false;

  public langSubMenuMobile = false;
  public adminSubMenuMobile = false;
  public userSubMenuMobile = false;

  constructor(public translate: TranslateService) {
    this.getScreenSize();
    this.currentLang = this.translate.currentLang;
    this.translate.onLangChange.subscribe((newLang) => {
      this.currentLang = newLang.lang;
      this.getLangs();
    });
    this.getLangs();
  }

  public open(): void {
    this.visible = true;
  }

  public close(): void {
    this.visible = false;
  }

  public getLangs(): void {
    this.langs = LANGS.filter(elem => elem !== this.currentLang);
  }

  public changeLang(newLang: string, isMobile: boolean): void {
    this.translate.use(newLang);
    this.closeMenu(isMobile);
  }

  public closeMenu(isMobile?: boolean): void {
    if (isMobile !== undefined && isMobile) {
      this.close();
    } else {
      this.langSubMenu = false;
      this.adminSubMenu = false;
      this.userSubMenu = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        console.log(this.screenHeight, this.screenWidth);
  }
}
