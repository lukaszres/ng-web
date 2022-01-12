import {ChangeDetectorRef, Component} from '@angular/core';
import {environment} from '../environments/environment';
import {MediaMatcher} from "@angular/cdk/layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-web';
  fileName: string = '';
  currentApplicationVersion: string = environment.appVersion;
  mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  changeArticle(fileName: string) {
    this.fileName = fileName;
  }
}
