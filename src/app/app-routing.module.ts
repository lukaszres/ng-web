import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ArticleComponent} from "./articles/article/article.component";

const routes: Routes = [
  {path: 'article/:id', component: ArticleComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
