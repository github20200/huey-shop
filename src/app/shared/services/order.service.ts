import { ShoppingCartService } from './shopping-cart.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Order } from 'shared/models/order';

@Injectable()
export class OrderService {

  constructor(private db: AngularFireDatabase,
    private cartService: ShoppingCartService) { }

  async placeOrder(order: Order) {
    let result = await this.db.list('/order').push(order);
    this.cartService.clearAllCart();
    return result;
  }

  getAllOrders() {
    return this.db.list('/order');
  }

  getOrderByUser(userId: string) {
    return this.db.list('/order', {
      query: {
        orderByChild: 'user/userId',
        equalTo: userId
      }
    });
  }

  getOrderById(orderId: string) {
    return this.db.object('/order/' + orderId);
  }

  deleteById(orderId: string) {
    return this.db.object('/order' + orderId).remove();
  }


}
