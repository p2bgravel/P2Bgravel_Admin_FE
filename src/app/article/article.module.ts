import { NgModule } from '@angular/core';

import { ArticleRoutingModule } from './article-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    ArticleRoutingModule,
    SharedModule
  ]
})
export class ArticleModule { }
