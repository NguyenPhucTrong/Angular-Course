import { BackgroundColor } from "./../../../node_modules/listr2/node_modules/ansi-styles/index.d";
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHover]',
  standalone: true
})
export class AppHoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  @HostBinding("style.backgroundColor") backgroundColor: string = "white";
  @HostBinding("style.border") border: string = "none";
  @HostBinding("style.color") textColor: string = "white";

  @HostListener("mouseenter") OnMouseEnter() {
    this.backgroundColor = "white";
    this.textColor = "#282828";
    this.border = "#282828 3px solid"
  }

  @HostListener("mouseout") OnMouseOut() {
    this.backgroundColor = "#282828";
    this.textColor = "white";
    this.border = "none"
  }


}
