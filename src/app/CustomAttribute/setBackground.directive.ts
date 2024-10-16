import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";


@Directive({
  selector: '[setBackground]',
  standalone: true,
})


export class SetBackground {

  private element: ElementRef;

  constructor(element: ElementRef, private renderer: Renderer2) {
    this.element = element
  }

  ngOnInit() {
    // this.element.nativeElement.style.backgroundColor = "yellow"
    // this.element.nativeElement.style.color = "red"

    this.renderer.setStyle(this.element.nativeElement, "backgroundColor", "#333333");
    this.renderer.setStyle(this.element.nativeElement, "fontSize", "100");
    this.renderer.setStyle(this.element.nativeElement, "color", "#FFCCFF");
    // this.renderer.setAttribute(this.element.nativeElement, "title", "This is example title");

  }

}
