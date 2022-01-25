import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuService} from "./menu.service";
import {MenuItem} from "../../models/MenuItem";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  articleList: MenuItem[] = [];

  @Output()
  changeArticleEvent = new EventEmitter<string>();

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.articleList = this.menuService.getMenu()
  }

  changeArticle(articleFilename: string): void {
    this.changeArticleEvent.emit(articleFilename);
    console.log(articleFilename)
  }

  collapseSubMenu(menuItem: MenuItem): void {
    menuItem.collapsed = !menuItem.collapsed;
  }

}
