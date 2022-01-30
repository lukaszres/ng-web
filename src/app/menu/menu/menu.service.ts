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
        },
        {
          id: 'open_closed_principle',
          filename: 'solid/open_closed_principle.html',
          title: 'Open/Closed principle'
        },
        {
          id: 'liskov_substitution_principle',
          filename: 'solid/liskov_substitution_principle.html',
          title: 'Liskov substitution principle'
        },
        {
          id: 'interface_segregation_principle',
          filename: 'solid/interface_segregation_principle.html',
          title: 'Interface segregation principle'
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
    this.menuItems.forEach(
      menuItem => menuItem.children.forEach(
        childMenu => childMenu.filename = childMenu.filename.replace('/', '%2F'))
    );
    console.log(this.menuItems);
  }

  getMenu(): MenuItem[] {
    return this.menuItems;
  }
}
