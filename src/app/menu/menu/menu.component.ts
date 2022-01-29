import {Component, OnInit} from '@angular/core';
import {MenuService} from "./menu.service";
import {MenuItem} from "../../models/MenuItem";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  articleList: MenuItem[] = [];

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.articleList = this.menuService.getMenu()
  }

  collapseSubMenu(menuItem: MenuItem): void {
    menuItem.collapsed = !menuItem.collapsed;
  }

}
