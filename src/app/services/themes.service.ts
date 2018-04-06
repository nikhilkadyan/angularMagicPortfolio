import { Injectable } from '@angular/core';
import { getThemes } from './themes';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ThemesService {

  allThemes = getThemes();
  theme;
  constructor() {
   }

  getTheme(): Observable<any>{
    this.theme = this.allThemes[Math.floor((Math.random() * (this.allThemes.length)))];
    console.log(this.theme)
    return of(this.theme)
  }

  getNewTheme(){
    const currentTheme = this.theme;
    const themesWithoutCurrentTheme = this.allThemes.filter(
      theme => theme.name !== currentTheme.name
    );
    const randomThemeIndex = Math.floor(
      (Math.random() * (themesWithoutCurrentTheme.length))
    );
    this.theme = themesWithoutCurrentTheme[randomThemeIndex];
    console.log(this.theme) 
  }

}
