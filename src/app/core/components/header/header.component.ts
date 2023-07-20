import { Component } from '@angular/core';
import { ETheme } from '../../enums/ETheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public icon: string = ETheme.ICON_MOON
  public textTheme: string = ETheme.TEXT_MOON

  constructor(){}

  public toggle(){
    const theme = document.body.classList.toggle('dark-theme')

    if (theme){
      this.icon = ETheme.ICON_SUN;
      this.textTheme = ETheme.TEXT_SUN
    } else {
      this.icon = ETheme.ICON_MOON
      this.textTheme = ETheme.TEXT_MOON
    } 
  }
}
