import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import {SharedModule} from '../shared/shared.module';
import { ProductsComponent } from './pages/products/products.component';
import { ProductPreviewComponent } from './pages/product-preview/product-preview.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';

@NgModule({
  declarations: [ProductsComponent, ProductPreviewComponent, ProductEditComponent],
  imports: [
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
