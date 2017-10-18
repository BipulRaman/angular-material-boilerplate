import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {

  themes: Array<any> = [
    { value: 'default', name: 'Default', cssClass: null },
    { value: 'light', name: 'Light', cssClass: 'light-theme' },
    { value: 'white-snow', name: 'White snow', cssClass: 'white-snow-theme' },
    { value: 'mixed', name: 'Mixed', cssClass: 'mixed-theme' },
    { value: 'black', name: 'Black', cssClass: 'black-theme' }
  ];

  setCurrentTheme(){
    let theme = localStorage.getItem('theme');
    if(theme !== undefined){
      let selectedTheme = JSON.parse(theme);
      let body = document.getElementsByTagName('body')[0];
      body.classList.add(selectedTheme.cssClass);
    }
  }

  currentTheme(){
    let storedTheme = localStorage.getItem('theme')
    if(storedTheme !=null){
        return storedTheme;
    }
    else{
      return this.themes[0];
    }
  }

  setTheme(theme: any){
    let body = document.getElementsByTagName('body')[0];
    this.themes.forEach(theme => body.classList.remove(theme.cssClass));
    localStorage.removeItem('theme');

    if(theme.cssClass){
      localStorage.setItem('theme', JSON.stringify(theme));
      body.classList.add(theme.cssClass);
    }
  }
}
