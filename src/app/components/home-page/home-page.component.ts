import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SessionService } from '../../services/session.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule,
    CommonModule, ReactiveFormsModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'] // Fixed typo here
})
export class HomePageComponent {

  firstName: string = '';
  middleName: string = '';
  lastName: string = '';
  userId: number = 0;
  orgId: number = 0;

  constructor(
    private sessionService: SessionService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.firstName = this.sessionService.firstName || '';
    this.middleName = this.sessionService.middleName || '';
    this.lastName = this.sessionService.lastName || '';
    this.userId = this.sessionService.userId;
    this.orgId = this.sessionService.orgId;
  }

  premiumProducts = [
    { id: 1, name: 'T-Shirts', image: 'assets/images/premium-t-shirts.jpg' },
    { id: 2, name: 'Shirts', image: 'assets/images/premium-shirts.jpg' },
    { id: 3, name: 'Kurta Suit', image: 'assets/images/premium-kurta-set.jpg' },
    { id: 4, name: 'Sarees', image: 'assets/images/premium-sarees.jpg' },
    { id: 5, name: 'Girls Top', image: 'assets/images/premium-girls-top.jpg' },
    { id: 6, name: 'Hoodies', image: 'assets/images/premium-hoodies.jpg' },
    { id: 7, name: 'Jackets', image: 'assets/images/premium-jackets.jpg' },
    { id: 8, name: 'Jeans', image: 'assets/images/premium-jeans.jpg' },
  ];

  currentIndex = 0;
  translateX = 0;
  cardWidth = 150; // Width of each card, including margin
  visibleCardsCount = 1; // Number of cards visible in the viewport

  scrollCards(direction: number): void {
    const cardsToScroll = 1;
    const maxIndex = this.premiumProducts.length - this.visibleCardsCount;

    this.currentIndex += direction * cardsToScroll;
    if (this.currentIndex < 0) {
      this.currentIndex = 0;
    } else if (this.currentIndex > maxIndex) {
      this.currentIndex = maxIndex;
    }
    this.translateX = -this.currentIndex * this.cardWidth;
  }
}
