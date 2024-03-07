import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-card',
  standalone: true,
  imports: [],
  templateUrl: './basic-card.component.html',
  styleUrl: './basic-card.component.scss'
})
export class BasicCardComponent {
  @Input() imgUrl = '';
  @Input() title = '';
}
