import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from 'express';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule,
    CommonModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  item: any;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.item = JSON.parse(params['order']);

      //  1 == t-shirt, else === shirts , 3== kurta , 4==saree ,5== girls top , 6==hoodies ,7==jacket ,8 ==jeans

      if (this.item == '1') {
        this.products = [
          {
            id: 1,
            imageUrl: 'assets/images/gloumerOfJoyT1.jpg',
            imageUrl2: 'assets/images/gloumerOfJoyT6.jpg',
            brand: 'WROGN',
            name: 'Men Solid Polo Neck Pure Cotton',
            price: 569,
            originalPrice: 1199,
            discount: '52% off',
            availability: 'In Stock',
            tag: 'Free delivery',
          },
          {
            id: 2,
            imageUrl: 'assets/images/gloumerOfJoyT3.jpg',
            imageUrl2: 'assets/images/gloumerOfJoyT6.jpg',
            brand: 'JACK & JONES',
            name: 'Men Skinny Mid Rise Dark',
            price: 786,
            originalPrice: 2499,
            discount: '68% off',
            availability: 'Currently unavailable',
            tag: 'Top Discount of the Sale',
          },
          {
            id: 3,
            imageUrl: 'assets/images/gloumerOfJoyT5.jpg',
            imageUrl2: 'assets/images/gloumerOfJoyT6.jpg',
            brand: 'Allen Solly',
            name: 'Men Solid Polo Neck Cotton',
            price: 626,
            originalPrice: 1099,
            discount: '60% off',
            availability: 'In Stock',
            tag: 'Top Discount of the Sale',
          },
          {
            id: 4,
            imageUrl: 'assets/images/gloumerOfJoyT4.jpg',
            imageUrl2: 'assets/images/gloumerOfJoyT6.jpg',
            brand: 'PUMA',
            name: 'ACTIVE Big Logo Tee',
            price: 719,
            originalPrice: 1799,
            discount: '60% off',
            availability: 'Only few left',
            tag: 'Size: XS, M, L, XL',
          },
        ];
      }
      else if (this.item == '3') {
        this.products = [
          {
            id: 1,
            imageUrl: 'assets/images/kurtaSuit1.jpg', 
            imageUrl2: 'assets/images/kurtaSuit5.jpg', 
            brand: 'KURTA SUIT',
            name: 'MIMI Design',
            price: 569,
            originalPrice: 1199,
            discount: '52% off',
            availability: 'In Stock',
            tag: 'Free delivery',
          },
          {
            id: 2,
            imageUrl: 'assets/images/kurtaSuit2.jpg',
            imageUrl2: 'assets/images/kurtaSuit5.jpg', 
            brand: 'KURTA SUIT',
            name: 'Peach Self Design',
            price: 786,
            originalPrice: 2499,
            discount: '68% off',
            availability: 'Currently unavailable',
            tag: 'Top Discount of the Sale',
          },
          {
            id: 3,
            imageUrl: 'assets/images/kurtaSuit3.jpg',
            imageUrl2: 'assets/images/kurtaSuit5.jpg', 
            brand: 'KURTA SUIT',
            name: 'Dupatta Grey Kurta',
            price: 626,
            originalPrice: 1099,
            discount: '60% off',
            availability: 'In Stock',
            tag: 'Top Discount of the Sale',
          },
          {
            id: 4,
            imageUrl: 'assets/images/kurtaSuit4.jpg',
            imageUrl2: 'assets/images/kurtaSuit5.jpg', 
            brand: 'KURTA SUIT',
            name: 'Bharat Origin',
            price: 719,
            originalPrice: 1799,
            discount: '60% off',
            availability: 'Only few left',
            tag: 'Size: XS, M, L, XL',
          },
        ];
      }
      else if (this.item == '4') {
        this.products = [
          {
            id: 1,
            imageUrl: 'assets/images/saree1.jpg',
            imageUrl2: 'assets/images/saree5.jpg',
            brand: 'SAREE',
            name: 'Soft Silk Saree',
            price: 569,
            originalPrice: 1199,
            discount: '52% off',
            availability: 'In Stock',
            tag: 'Free delivery',
          },
          {
            id: 2,
            imageUrl: 'assets/images/saree2.jpg',
            imageUrl2: 'assets/images/saree5.jpg',
            brand: 'SAREE',
            name: 'Vardana Ethnic Saree',
            price: 786,
            originalPrice: 2499,
            discount: '68% off',
            availability: 'Currently unavailable',
            tag: 'Top Discount of the Sale',
          },
          {
            id: 3,
            imageUrl: 'assets/images/saree3.jpg',
            imageUrl2: 'assets/images/saree5.jpg',
            brand: 'SAREE',
            name: 'Rainbow Saree',
            price: 626,
            originalPrice: 1099,
            discount: '60% off',
            availability: 'In Stock',
            tag: 'Top Discount of the Sale',
          },
          {
            id: 4,
            imageUrl: 'assets/images/saree4.jpg',
            imageUrl2: 'assets/images/saree5.jpg',
            brand: 'SAREE',
            name: 'Semi Silk Saree',
            price: 719,
            originalPrice: 1799,
            discount: '60% off',
            availability: 'Only few left',
            tag: 'Size: XS, M, L, XL',
          },
        ];
      }
      else if (this.item == '5') {
        this.products = [
          {
            id: 1,
            imageUrl: 'assets/images/girlsTop1.jpg',
            imageUrl2: 'assets/images/girlsTop5.jpg',
            brand: 'GIRLS TOP',
            name: 'Chiffon Round Neck',
            price: 569,
            originalPrice: 1199,
            discount: '52% off',
            availability: 'In Stock',
            tag: 'Free delivery',
          },
          {
            id: 2,
            imageUrl: 'assets/images/girlsTop2.jpg',
            imageUrl2: 'assets/images/girlsTop5.jpg',
            brand: 'GIRLS TOP',
            name: 'Off On Fancy',
            price: 786,
            originalPrice: 2499,
            discount: '68% off',
            availability: 'Currently unavailable',
            tag: 'Top Discount of the Sale',
          },
          {
            id: 3,
            imageUrl: 'assets/images/girlsTop3.jpg',
            imageUrl2: 'assets/images/girlsTop5.jpg',
            brand: 'GIRLS TOP',
            name: 'Thread Working',
            price: 626,
            originalPrice: 1099,
            discount: '60% off',
            availability: 'In Stock',
            tag: 'Top Discount of the Sale',
          },
          {
            id: 4,
            imageUrl: 'assets/images/girlsTop4.jpg',
            imageUrl2: 'assets/images/girlsTop5.jpg',
            brand: 'GIRLS TOP',
            name: 'Tunic Top',
            price: 719,
            originalPrice: 1799,
            discount: '60% off',
            availability: 'Only few left',
            tag: 'Size: XS, M, L, XL',
          },
        ];
      }
      else if (this.item == '6') {
        this.products = [
          {
            id: 1,
            imageUrl: 'assets/images/hoodie.jpg',
            imageUrl2: 'assets/images/hoodie5.jpg',
            brand: 'SWEATSHIRT | HOODIE',
            name: 'Best Persomlized',
            price: 569,
            originalPrice: 1199,
            discount: '52% off',
            availability: 'In Stock',
            tag: 'Free delivery',
          },
          {
            id: 2,
            imageUrl: 'assets/images/hoodie1.jpg',
            imageUrl2: 'assets/images/hoodie5.jpg',
            brand: 'SWEATSHIRT | HOODIE',
            name: 'Blue And Grey Hoodie',
            price: 786,
            originalPrice: 2499,
            discount: '68% off',
            availability: 'Currently unavailable',
            tag: 'Top Discount of the Sale',
          },
          {
            id: 3,
            imageUrl: 'assets/images/hoodie2.jpg',
            imageUrl2: 'assets/images/hoodie5.jpg',
            brand: 'SWEATSHIRT | HOODIE',
            name: 'Pronk Men',
            price: 626,
            originalPrice: 1099,
            discount: '60% off',
            availability: 'In Stock',
            tag: 'Top Discount of the Sale',
          },
          {
            id: 4,
            imageUrl: 'assets/images/hoodie3.jpg',
            imageUrl2: 'assets/images/hoodie5.jpg',
            brand: 'SWEATSHIRT | HOODIE',
            name: 'Monochrome Hunk',
            price: 719,
            originalPrice: 1799,
            discount: '60% off',
            availability: 'Only few left',
            tag: 'Size: XS, M, L, XL',
          },
        ];
      } 
      else if (this.item == '7') {
        this.products = [
          {
            id: 1,
            imageUrl: 'assets/images/jacket2.jpg',
            imageUrl2: 'assets/images/jacket5.jpg',
            brand: 'JACKET',
            name: 'Men Winter Jacket',
            price: 569,
            originalPrice: 1199,
            discount: '52% off',
            availability: 'In Stock',
            tag: 'Free delivery',
          },
          {
            id: 2,
            imageUrl: 'assets/images/jacket1.jpg',
            imageUrl2: 'assets/images/jacket5.jpg',
            brand: 'JACKET',
            name: 'Creatmo US',
            price: 786,
            originalPrice: 2499,
            discount: '68% off',
            availability: 'Currently unavailable',
            tag: 'Top Discount of the Sale',
          },
          {
            id: 3,
            imageUrl: 'assets/images/jacket4.jpg',
            imageUrl2: 'assets/images/jacket5.jpg',
            brand: 'JACKET',
            name: 'Full Sleeve Solid Pink',
            price: 626,
            originalPrice: 1099,
            discount: '60% off',
            availability: 'In Stock',
            tag: 'Top Discount of the Sale',
          },
          {
            id: 4,
            imageUrl: 'assets/images/jacket3.jpg',
            imageUrl2: 'assets/images/jacket5.jpg',
            brand: 'JACKET',
            name: 'Boldfit Jacket',
            price: 719,
            originalPrice: 1799,
            discount: '60% off',
            availability: 'Only few left',
            tag: 'Size: XS, M, L, XL',
          },
        ];
      } 
      else {
        this.products = [
          {
            id: 1,
            imageUrl: 'assets/images/gloumerOfJoy6.jpg',
            imageUrl2: 'assets/images/gloumerOfJoy8.jpg',
            brand: 'CASUAL',
            name: 'Men Solid Polo Neck Pure Cotton',
            price: 569,
            originalPrice: 1199,
            discount: '52% off',
            availability: 'In Stock',
            tag: 'Free delivery',
          },
          {
            id: 2,
            imageUrl: 'assets/images/gloumerOfJoy2.jpg',
            imageUrl2: 'assets/images/gloumerOfJoy8.jpg',
            brand: 'PRINTED',
            name: 'Men Skinny Mid Rise Dark',
            price: 786,
            originalPrice: 2499,
            discount: '68% off',
            availability: 'Currently unavailable',
            tag: 'Top Discount of the Sale',
          },
          {
            id: 3,
            imageUrl: 'assets/images/gloumerOfJoy1.jpg',
            imageUrl2: 'assets/images/gloumerOfJoy8.jpg',
            brand: 'SHORT SLEEVES',
            name: 'Men Solid Polo Neck Cotton',
            price: 626,
            originalPrice: 1099,
            discount: '60% off',
            availability: 'In Stock',
            tag: 'Top Discount of the Sale',
          },
          {
            id: 4,
            imageUrl: 'assets/images/gloumerOfJoy7.jpg',
            imageUrl2: 'assets/images/gloumerOfJoy8.jpg',
            brand: 'DESIGN',
            name: 'ACTIVE Big Logo Tee',
            price: 719,
            originalPrice: 1799,
            discount: '60% off',
            availability: 'Only few left',
            tag: 'Size: XS, M, L, XL',
          },
        ];
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  products = [
    {
      id: 1,
      imageUrl: 'assets/images/gloumerOfJoyT1.jpg',
      imageUrl2: '',
      brand: 'WROGN',
      name: 'Men Solid Polo Neck Pure Cotton',
      price: 569,
      originalPrice: 1199,
      discount: '52% off',
      availability: 'In Stock',
      tag: 'Free delivery',
    },
    {
      id: 2,
      imageUrl: 'assets/images/gloumerOfJoy7.jpg',
      brand: 'JACK & JONES',
      name: 'Men Skinny Mid Rise Dark',
      price: 786,
      originalPrice: 2499,
      discount: '68% off',
      availability: 'Currently unavailable',
      tag: 'Top Discount of the Sale',
    },
    {
      id: 3,
      imageUrl: 'assets/images/premium-t-shirts.jpg',
      brand: 'Allen Solly',
      name: 'Men Solid Polo Neck Cotton',
      price: 626,
      originalPrice: 1099,
      discount: '60% off',
      availability: 'In Stock',
      tag: 'Top Discount of the Sale',
    },
    {
      id: 4,
      imageUrl: 'assets/images/gloumerOfJoyT3.jpg',
      brand: 'PUMA',
      name: 'ACTIVE Big Logo Tee',
      price: 719,
      originalPrice: 1799,
      discount: '60% off',
      availability: 'Only few left',
      tag: 'Size: XS, M, L, XL',
    },
  ];

}
