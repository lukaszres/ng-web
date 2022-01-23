import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  articleList = [
    {
      id: 'compositionOverInheritance',
      parent: '',
      filename: 'composition_over_inheritance.html',
      title: 'Composition over inheritance'
    },
    {
      id: 'solid',
      parent: '',
      filename: 'solid.html',
      title: 'SOLID'
    },
    {
      id: 'single_responsibility',
      parent: 'solid',
      filename: 'solid/single_responsibility.html',
      title: 'Single Responsibility'
    }
  ];

  @Output()
  changeArticleEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {

  }

  changeArticle(articleFilename: string): void {
    this.changeArticleEvent.emit(articleFilename);
  }

}
