import {Injectable} from '@angular/core';
import {MenuItem} from "../../models/MenuItem";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuItems: MenuItem[] = [];

  articleList = [
    {
      id: 'compositionOverInheritance',
      filename: 'composition_over_inheritance.html',
      title: 'Composition over inheritance',
      children: []
    },
    {
      id: 'solid',
      filename: 'solid.html',
      title: 'SOLID',
      children: [
        {
          id: 'single_responsibility',
          filename: 'solid/single_responsibility.html',
          title: 'Single Responsibility'
        }
      ]
    }
  ];

  constructor() {
    this.menuItems = this.articleList.map(article => {
      let menuItem = article as MenuItem;
      menuItem.collapsed = true;
      return menuItem;
    });
  }

  getMenu(): MenuItem[] {
    return this.menuItems;
  }
}
