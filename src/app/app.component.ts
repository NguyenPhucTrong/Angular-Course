import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from "./header/header.component";
import { TopHeaderComponent } from './top-header/top-header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ExampleComponent } from './example/example.component';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopHeaderComponent, FooterComponent, ContentComponent, ExampleComponent, HeaderComponent, HomeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // inputValue: string = 'Giá trị ban đầu từ cha';

  // updateValue() {
  //   this.inputValue = 'Giá trị mới từ cha!'; // Thay đổi giá trị cho input
  // }
}
