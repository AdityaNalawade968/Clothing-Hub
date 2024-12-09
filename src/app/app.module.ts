import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AppComponent } from './app.component';
import { NewArrivalsComponent } from './components/new-arrivals/new-arrivals.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    NewArrivalsComponent  
  ],
  imports: [
    BrowserModule,
    CommonModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
