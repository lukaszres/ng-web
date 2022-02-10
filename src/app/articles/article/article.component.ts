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
  SLASH_CODE: string = '%2F';

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userSubscription = this.activatedRoute.params.subscribe(
      () => {
        const articleId = this.activatedRoute.snapshot.paramMap.get('id');
        this.httpClient.get('assets/articles/' + articleId, {responseType: 'text'})
          .subscribe(data => {
            // var re = /([^<])\/([^>])/g;
            var re = /([^<])\/([^>])/g;
            // var re = /([^article])\//g;
            // var re = /?!<\/;
            const htmlString1 = data.replace(re, this.SLASH_CODE);
            console.log(htmlString1);
            this.htmlString = htmlString1;
          });
      }
    );
  }
}
