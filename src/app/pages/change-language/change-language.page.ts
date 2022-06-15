import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.page.html',
  styleUrls: ['./change-language.page.scss'],
})
export class ChangeLanguagePage implements OnInit {

  language: string = this.translateService.currentLang;

  constructor(private translateService: TranslateService) {
    // translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

  changeEn() {
    this.translateService.use('en');
  }

  changeEs() {
    this.translateService.use('es');
  }

  changePt() {
    this.translateService.use('pt');
  }

}
