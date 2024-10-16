import { Component, OnInit, OnDestroy, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example',
  standalone: true,
  template: `
    <div>
      <h1>Ví dụ về Lifecycle Hooks</h1>
      <p>Giá trị đầu vào: {{ myInput }}</p>
      <button (click)="changeInput()">Thay đổi giá trị đầu vào</button>
    </div>
  `
})
export class ExampleComponent implements OnInit, OnDestroy, OnChanges {
  @Input() myInput: string = 'Giá trị ban đầu'; // Thuộc tính đầu vào

  constructor() {
    console.log("Constructor: Component được tạo ra!");
  }

  ngOnInit() {
    console.log("ngOnInit: Component đã khởi tạo!");
    // Có thể gọi API hoặc khởi tạo dữ liệu ở đây
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges: Giá trị đầu vào đã thay đổi:", changes);
  }

  changeInput() {
    this.myInput = 'Giá trị đã thay đổi!'; // Thay đổi giá trị đầu vào
  }

  ngOnDestroy() {
    console.log("ngOnDestroy: Component sẽ bị hủy!");
    // Dọn dẹp tài nguyên nếu cần thiết
  }
}
