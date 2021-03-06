import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular-4-data-table';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomFormsModule } from 'ng2-validation';

import { ListOrderViewComponent } from './components/list-order-view/list-order-view.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import { SearchComponent } from './components/search/search.component';
import { SizeService } from './services/size.service';
import { WindowService } from './services/window.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'orders/:orderId', component: ListOrderViewComponent, canActivate: [AuthGuardService] }
    ]),
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    NgbModule.forRoot(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    ListOrderViewComponent,
    SearchComponent
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
    SizeService,
    WindowService
  ],
  exports : [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot().ngModule,
    ProductCardComponent,
    ProductQuantityComponent,
    ListOrderViewComponent,
    SearchComponent
  ]
})
export class SharedModule { }
