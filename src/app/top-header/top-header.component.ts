import { Component } from '@angular/core';

@Component({
  selector: 'top-header',
  standalone: true,
  imports: [],
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

  onChangeName(event: any) {
    this.name = event.target.value;
    // console.log(event.target.value);
  }
}
