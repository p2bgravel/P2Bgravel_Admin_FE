import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HeaderComponent} from './layout/header/header.component';
import {MainContentHeaderComponent} from './layout/main-content-header/main-content-header.component';

const COMPONENTS = [
  SidebarComponent,
  FooterComponent,
  HeaderComponent,
  MainContentHeaderComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class CoreModule {
}
