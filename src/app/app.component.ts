import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { PreHeaderComponent } from './components/pre-header/pre-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,PreHeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Fixed typo here
})
export class AppComponent {
  title = 't-verse-clothing-hub';
}
