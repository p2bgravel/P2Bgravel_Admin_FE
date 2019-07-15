import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { UserPreviewComponent } from './pages/user-preview/user-preview.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
	declarations: [UserEditComponent, UserPreviewComponent, UsersComponent],
	imports: [UserRoutingModule, SharedModule]
})
export class UserModule {}
