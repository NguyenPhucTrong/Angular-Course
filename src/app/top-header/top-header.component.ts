import { SetBackground } from "./../CustomAttribute/setBackground.directive";
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'top-header',
  standalone: true,
  imports: [FormsModule, SetBackground],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.css'
})
export class TopHeaderComponent {
  title: string = "test "
  name = "Tiến Tài"
  products = {
    message: "VLU",
    price: 12,
    discount: 12,
    inStock: 2,
    pImage: "/assets/flower1.png"
  }


  getDiscount() {
    return this.products.price - (this.products.price * this.products.discount / 100)
  }

  // onChangeName(inputEl: HTMLInputElement) {

  //   console.log(inputEl);
  //   // console.log(event.target.value);
  // }

  @ViewChild('inputEL') inputElements: ElementRef;

  show() {
    console.log(this.inputElements);

  }
}
