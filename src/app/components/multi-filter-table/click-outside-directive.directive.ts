import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, Inject, Output } from '@angular/core';
import { filter, fromEvent } from 'rxjs';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirectiveDirective implements AfterViewInit{

  @Output

  constructor(private element: ElementRef, @Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit(): void {
    fromEvent(this.document, 'click').pipe(filter(event) => {
      return !this.isInside(event.target as HTMLElement)
    }).subscribe(() => {
      
    })
  }

  isInside(elementToCheck: HTMLElement): boolean{
    return elementToCheck === this.element.nativeElement || 
    this.element.nativeElement.contains(this.element)
  }
}
