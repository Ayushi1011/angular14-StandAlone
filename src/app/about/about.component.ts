import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooDirective } from '../foo.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,AboutComponent,FooDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  color!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
