import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  htmlString: string = '<p>jakiś tekst</p>';
  userSubscription: any;

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userSubscription = this.activatedRoute.params.subscribe(
      () => {
        const articleId = this.activatedRoute.snapshot.paramMap.get('id');
        this.httpClient.get('assets/articles/' + articleId, {responseType: 'text'})
          .subscribe(data => this.htmlString = data);
      }
    );
  }
}
