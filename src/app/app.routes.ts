import { Routes } from '@angular/router';
import { NewArrivalsComponent } from './components/new-arrivals/new-arrivals.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailesComponent } from './components/product-detailes/product-detailes.component';   
import { AuthGuard } from './auth.guard';
export const routes: Routes = [
    { path: '', component: NewArrivalsComponent },
    // { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomePageComponent },
    { path: 'cart', component: CartComponent },
    { path: 'product-list', component: ProductListComponent },
    {
        path: 'product-detailes',
        component: ProductDetailesComponent
    },
];
