import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartDetails } from '../../comman/CartDetailes';
import { ToastrService } from 'ngx-toastr';
import { log } from 'console';
@Component({
  selector: 'app-product-detailes',
  standalone: true,
  imports: [RouterModule,
    CommonModule
  ],
  templateUrl: './product-detailes.component.html',
  styleUrl: './product-detailes.component.css'
})
export class ProductDetailesComponent {
  toaster = inject(ToastrService)
  item: any;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private location: Location,
  ) { }

  product: any;

  selectedIndex: number = 0; 
 
  changeImage(index: number): void {
    this.selectedIndex = index;
  }
  

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.item = JSON.parse(params['order']);
      this.product = {
        name: this.item.name,
        brand: this.item.brand,
        price: this.item.price,
        originalPrice: this.item.originalPrice,
        discount: this.item.discount,
        rating: 4.2,
        reviews: 2946,
        colorOptions: [
          { id: 0, imageUrl: this.item.imageUrl, name: 'Pink' },
          { id: 1, imageUrl: this.item.imageUrl2, name: 'Light Blue' },
          { id: 2, imageUrl: this.item.imageUrl, name: 'Black' },
          { id: 3, imageUrl: this.item.imageUrl, name: 'White' }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        offers: [
          { type: 'Special Price', description: 'Get extra 5% off upto ₹50 on 20 item(s)' },
          { type: 'Bank Offer', description: '5% Unlimited Cashback on Flipkart Axis Bank Credit Card' },
          { type: 'Bank Offer', description: '10% off upto ₹1,500 on SBI Credit Card Transactions of ₹4,990 and above' },
        ]
      };
    });
  }

  cardItems = new CartDetails;

  addToCartFunction() {
    try {
      this.cardItems.name = this.item;
      this.cartService.addToCart(this.cardItems);
      this.toaster.success("Added to cart.", "Success");
    } catch (error) {
      console.error('Error adding to cart:', error);
      this.toaster.error("Failed to add to cart. Please try again.", "Error");
    }
  }

  buyFunction() {
    this.toaster.warning("Get in soon", "Description");
  }

  goBack(): void {
    this.location.back();
  }

}
