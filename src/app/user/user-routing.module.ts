import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { UserPreviewComponent } from './pages/user-preview/user-preview.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'user',
		component: UsersComponent
	},
	{
		path: ':id',
		component: UserPreviewComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UserRoutingModule {}
