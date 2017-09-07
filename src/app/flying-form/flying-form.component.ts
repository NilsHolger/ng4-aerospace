import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { AuthenticationService } from '../authentication.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Order } from '../models/order';
import { Shipping } from '../models/shipping';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-flying-form',
  templateUrl: './flying-form.component.html',
  styleUrls: ['./flying-form.component.css']
})
export class FlyingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  // shipping: Shipping = {};
  shipping: Shipping = {name: '', addressLine1: '', addressLine2: '', city: ''};
  userSubscription: Subscription;
  userId: string;

  constructor(private router: Router, private orderService: OrderService,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
  this.userSubscription = this.authenticationService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  async saveOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.saveClearOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }

}
