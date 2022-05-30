import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';

export interface Person {
  name: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  persons: Person[] = [];
  searchTerm!: string;

  //static names
  names = ['apple', 'banana', 'orange', 'strawberry', 'oak', 'banyan'];

  constructor() {
    this.names.forEach((e) =>
      this.persons.push({
        name: e,
      })
    );
  }

  ngOnInit(): void {}
}
