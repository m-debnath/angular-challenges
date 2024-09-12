import { Component, OnInit } from '@angular/core';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { CityStore } from '../../data-access/city.store';
import { CardType } from '../../model/card.model';
import { City } from '../../model/city.model';

import { CardComponent } from '../../ui/card/card.component';
@Component({
  selector: 'app-city-card',
  template: `<app-card
    [list]="items"
    [type]="cardType"
    customClass="bg-light-blue"></app-card>`,
  styles: [
    `
      ::ng-deep .bg-light-blue {
        background-color: rgba(0, 0, 255, 0.1);
      }
    `,
  ],
  standalone: true,
  imports: [CardComponent],
})
export class CityCardComponent implements OnInit {
  items: City[] = [];
  cardType = CardType.CITY;

  constructor(
    private http: FakeHttpService,
    private store: CityStore,
  ) {}

  ngOnInit(): void {
    this.http.fetchCities$.subscribe((t) => this.store.addAll(t));

    this.store.cities$.subscribe((t) => (this.items = t));
  }
}
