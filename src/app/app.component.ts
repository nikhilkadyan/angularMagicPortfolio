import { Component } from '@angular/core';
import { ThemesService} from './services/themes.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ThemesService]
})
export class AppComponent {
  title = 'app';
  Theme:any;
  newThemeFunction: Function;

  constructor (public themesService: ThemesService) {
    this.Theme = this.themesService.theme;
  }

  getTheme(){
    this.themesService.getTheme().subscribe(theme => this.Theme = theme);
  }
  ngOnInit(){
    this.getTheme();
    this.newThemeFunction = this.newTheme.bind(this);
  }

  public newTheme(){
    const currentTheme = this.Theme.name;
    const themesWithoutCurrentTheme = this.themesService.allThemes.filter(
      theme => theme.name !== currentTheme.name
    );
    const randomThemeIndex = Math.floor(
      (Math.random() * (themesWithoutCurrentTheme.length))
    );
    this.Theme = themesWithoutCurrentTheme[randomThemeIndex];
  }

}
