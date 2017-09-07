import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { ProductService } from '../product.service';
import { User } from '../models/user';
import { ShoppingCart } from '../models/shopping-cart';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;
  cart$: Observable<ShoppingCart>;

  constructor(private authenticationService: AuthenticationService,
              private shoppingCartService: ShoppingCartService,
              private productService: ProductService) { }

  onSearch(query: string): void {
    if (query) {
    this.productService.searchEvent.emit(query.toLowerCase());
    }
  }

  logout() {
      this.authenticationService.logout();
  }

  async ngOnInit() {
    this.authenticationService.appUser$.subscribe(user => this.user = user);
    this.cart$ =  await this.shoppingCartService.getCart();

  }
}
