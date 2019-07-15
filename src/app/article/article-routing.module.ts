import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticlePreviewComponent } from './pages/article-preview/article-preview.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'articles',
		component: ArticlesComponent
	},
	{
		path: ':id',
		component: ArticlePreviewComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ArticleRoutingModule {}
