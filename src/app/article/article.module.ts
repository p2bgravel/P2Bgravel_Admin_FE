import { NgModule } from '@angular/core';

import { ArticleRoutingModule } from './article-routing.module';
import {SharedModule} from '../shared/shared.module';
import { ArticlePreviewComponent } from './pages/article-preview/article-preview.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleEditComponent } from './pages/article-edit/article-edit.component';

@NgModule({
  declarations: [ArticlePreviewComponent, ArticlesComponent, ArticleEditComponent],
  imports: [
    ArticleRoutingModule,
    SharedModule
  ]
})
export class ArticleModule { }
