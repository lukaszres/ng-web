import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  htmlString: string = '<p>jakiś tekst</p>';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('assets/articles/composition_over_inheritance.html', {responseType: 'text'})
      .subscribe(data => this.htmlString = data);
  }

}
