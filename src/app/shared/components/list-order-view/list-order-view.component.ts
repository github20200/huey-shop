import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'list-order-view',
  templateUrl: './list-order-view.component.html',
  styleUrls: ['./list-order-view.component.css']
})
export class ListOrderViewComponent implements OnInit {

  @Input('order$') order$: Observable<any[]>;
  orderId: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService) { }

  ngOnInit() {
  }
  delete() {
    if (confirm('Are you sure?')) {
      if (this.orderId) {
        this.orderService.deleteById(this.orderId);
        this.router.navigateByUrl("orders");
      }
    }
  }
}

