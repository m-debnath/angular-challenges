import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Teacher } from '../model/teacher.model';

@Injectable({
  providedIn: 'root',
})
export class TeacherStore {
  private items = new BehaviorSubject<Teacher[]>([]);
  teachers$ = this.items.asObservable();

  addAll(teachers: Teacher[]) {
    this.items.next(teachers);
  }

  addOne(teacher: Teacher) {
    this.items.next([...this.items.value, teacher]);
  }

  deleteOne(id: number) {
    this.items.next(this.items.value.filter((t) => t.id !== id));
  }
}
