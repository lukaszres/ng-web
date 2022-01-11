import {Component} from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-web';
  fileName: string = '';
  currentApplicationVersion: string = environment.appVersion;

  changeArticle(fileName: string) {
    this.fileName = fileName;
  }
}
