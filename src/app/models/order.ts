import { ShoppingCart } from './shopping-cart';

export class Order {
  datePlaced: number;
  items: any[];

  constructor(public userId: string, public shipping: any, shoppingCart: ShoppingCart) {
    this.datePlaced = new Date().getTime();
    this.items = shoppingCart.items.map(idx => {
        return {
          product: {
            title: idx.title,
            imageUrl: idx.imageUrl,
            price: idx.price
          },
          quantity: idx.quantity,
          totalPrice: idx.totalPrice
        };
    });
  }
}
