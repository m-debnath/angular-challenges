import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentStore {
  private items = new BehaviorSubject<Student[]>([]);
  students$ = this.items.asObservable();

  addAll(students: Student[]) {
    this.items.next(students);
  }

  addOne(student: Student) {
    this.items.next([...this.items.value, student]);
  }

  deleteOne(id: number) {
    this.items.next(this.items.value.filter((s) => s.id !== id));
  }
}
