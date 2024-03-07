import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common'; // AOS
import AOS from 'aos'; 
import { BasicCardComponent } from '../../components/basic-card/basic-card.component';
import { BasicCard } from '../../types/basic-card.type';
import { LocationCard } from '../../types/location-card.type';
import { LocationCardComponent } from '../../components/location-card/location-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BasicCardComponent, LocationCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'LaCamDeAlan - Home';

  public cards: BasicCard[] = [
    {
      title: 'Sociales',
      imgURL: '/assets/img/rrss1.jpg'
    },
    {
      title: 'Retrato',
      imgURL: '/assets/img/retrato1.jpg'
    },
    {
      title: 'Budoir',
      imgURL: '/assets/img/budoir1.jpg'
    },
    {
      title: 'Producto',
      imgURL: '/assets/img/producto2.jpg'
    }
  ];

  public cardsCam: BasicCard[] = [
    {
      title: 'Contenido para RRSS',
      imgURL: '/assets/img/rrss-card.gif'
    },
    {
      title: 'Fotografía con drone',
      imgURL: '/assets/img/drone-card.gif'
    }
  ];

  public locationCards: LocationCard[] = [
    {
      title: 'Teotihuacán',
      location: 'Ciudad de México',
      imgURL: '/assets/img/teotihuacan.jpg'
    },
    {
      title: 'Popocatepetl',
      location: 'Puebla',
      imgURL: '/assets/img/popocatepetl.jpg'
    },
    {
      title: 'Cholula',
      location: 'Puebla',
      imgURL: '/assets/img/cholula.jpg'
    },
    {
      title: 'Torre Latinoamericana',
      location: 'Ciudad de México',
      imgURL: '/assets/img/latino.jpg'
    },
    {
      title: 'Palacio de Bellas Artes',
      location: 'Ciudad de México',
      imgURL: '/assets/img/bellas-artes.jpg'
    },
    {
      title: 'Janitzio',
      location: 'Michoacán',
      imgURL: '/assets/img/janitzio.jpg'
    }
  ];

  // AOS
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  // AOS
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
}
