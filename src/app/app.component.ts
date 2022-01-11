import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-web';
  fileName: string = '';

  changeArticle(fileName: string) {
    this.fileName = fileName;
  }
}
