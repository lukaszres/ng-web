import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  articleList = [
    {
      filename: 'composition_over_inheritance.hml',
      title: 'Composition over inheritance'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {

  }

}
