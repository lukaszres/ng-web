import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  fileName: string = '';

  htmlString: string = '<p>jakiś tekst</p>';

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get('assets/articles/' + this.fileName, {responseType: 'text'})
      .subscribe(data => this.htmlString = data);
  }

}
