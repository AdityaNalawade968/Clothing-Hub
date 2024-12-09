import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { log } from 'console';
import { stringify } from 'querystring';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(private cartService: CartService,
    private location: Location,
    private sessionService: SessionService
  ) { }

  ifUserLogIn: string = "default";
  ngOnInit(): void {

    const user = this.sessionService.getItem('user');
    this.ifUserLogIn = user ? user : 'default';

    this.cartItems = this.cartService.getCartItems();
    this.cartItems.forEach((element) => {
      try {
        if (typeof element.name === "string") {
          const parsedData = JSON.parse(element.name);
          this.cartItems1.push(parsedData);
        } else if (typeof element.name === "object") {
          this.cartItems1.push(element.name);
        } else {
          console.error("Unsupported data format:", element.name);
        }
      } catch (error) {
        console.error(`Error processing element.name: ${element.name}`, error);
      }
    });
  }

  cartItems = [
    {
      id: 1,
      name: 'Item 1',
      description: 'This is a great product.',
      price: 25.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Item 2',
      description: 'This is another great product.',
      price: 15.49,
      image: 'https://via.placeholder.com/150'
    }
  ];

  cartItems1: any = [
  ];

  removeFromCart(id: number) {
    // Remove item with the matching ID
    this.cartItems1 = this.cartItems1.filter((item: any) => item.id !== id);
    console.log("Updated Cart Items:", this.cartItems1);
  }

  goBack(): void {
    this.location.back();
  }

}
