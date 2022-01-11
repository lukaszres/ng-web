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
