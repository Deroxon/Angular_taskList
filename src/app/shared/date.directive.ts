import { Directive, HostListener, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

   
  @Input()  date:string ='';
   private paragraph:any; //p

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    this.paragraph = this.renderer.createElement('p')
  }

  // hostListener działaja jak coś typu addeventListener
  @HostListener('mouseenter') 
  mouseenter(eventDate: Event) { 
     this.paragraph.innerHTML = this.date;
    this.renderer.appendChild(this.el.nativeElement, this.paragraph)
  }

  @HostListener('mouseleave') 
  mouseleave(eventDate: Event) { 
    this.renderer.removeChild(this.el.nativeElement, this.paragraph)
  }

}
