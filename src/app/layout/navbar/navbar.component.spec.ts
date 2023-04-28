import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TranslateModule.forRoot(), NzLayoutModule, NzDrawerModule, NzMenuModule, BrowserAnimationsModule ],
      declarations: [ NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
