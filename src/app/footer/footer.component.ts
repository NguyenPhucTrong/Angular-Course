import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {


  display = "OFF"
  onClick() {
    switch (this.display) {
      case "OFF":
        this.display = "ON"
        break;
      case "ON":
        this.display = "OFF"
        break;
      default:
        this.display = "ON"
        break;
    }
  }


}
