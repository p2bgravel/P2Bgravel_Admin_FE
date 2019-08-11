import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainContentHeaderComponent } from './layout/main-content-header/main-content-header.component';
import { ApiService, JwtService } from './services';

const COMPONENTS = [
	SidebarComponent,
	FooterComponent,
	HeaderComponent,
	MainContentHeaderComponent
];

const CORE_PROVIDER = [ApiService, JwtService];

@NgModule({
	declarations: [...COMPONENTS],
	imports: [CommonModule],
	exports: [...COMPONENTS],
	providers: [...CORE_PROVIDER]
})
export class CoreModule {}
