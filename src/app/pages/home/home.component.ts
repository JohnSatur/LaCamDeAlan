import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // AOS
import AOS from 'aos'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'LaCamDeAlan - Home';

  // AOS
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // AOS
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
}
