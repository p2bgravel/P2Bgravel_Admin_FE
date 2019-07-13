import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainContentComponent } from './layout/main-content/main-content.component';

@NgModule({
  declarations: [SidebarComponent, FooterComponent, HeaderComponent, MainContentComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
