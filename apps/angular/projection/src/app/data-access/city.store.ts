import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { City } from '../model/city.model';

@Injectable({
  providedIn: 'root',
})
export class CityStore {
  private items = new BehaviorSubject<City[]>([]);
  cities$ = this.items.asObservable();

  addAll(cities: City[]) {
    this.items.next(cities);
  }

  addOne(city: City) {
    this.items.next([...this.items.value, city]);
  }

  deleteOne(id: number) {
    this.items.next(this.items.value.filter((s) => s.id !== id));
  }
}
