import { Directive, ElementRef } from "@angular/core";


@Directive({
  selector: '[setBackground]',
  standalone: true,
})

export class SetBackground {

  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = "yellow"
  }

}
