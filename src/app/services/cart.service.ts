// cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];

  // Add an item to the cart
  addToCart(item: any) {
    this.cartItems.push(item);
  }

  // Retrieve all items in the cart
  getCartItems(): any[] {
    return this.cartItems;
  }

  // Clear the cart (optional, for checkout or emptying the cart)
  clearCart() {
    this.cartItems = [];
  }
}
