import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NgFor],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  productTest = [
    { id: 1, name: "Test 1", price: 10 },
    { id: 2, name: "Test 2", price: 20 },
    { id: 3, name: "Test 3", price: 30 }
  ];

}
