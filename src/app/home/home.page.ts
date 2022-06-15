import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private theme: ThemeService,
    private router: Router
  ) {}

  applyDark() {
    this.theme.enableDark();
    console.log('applyDark');
  }

  removeDark() {
    this.theme.disableDark();
    console.log('removeDark');
  }

  goTo() {
    this.router.navigate(['/change-language'])
  }

}
