import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [RouterModule,
    CommonModule, ReactiveFormsModule,DragDropModule
  ],
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent {

  // -------------------

  availableItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  selectedItems: string[] = [];

  // Handles drag-and-drop events
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      // Move item between containers
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  // ----------------------

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
