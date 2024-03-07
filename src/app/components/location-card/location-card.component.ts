import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-card',
  standalone: true,
  imports: [],
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.scss'
})
export class LocationCardComponent {
  @Input() title: string = '';
  @Input() location: string = '';
  @Input() imgURL: string = '';
}
