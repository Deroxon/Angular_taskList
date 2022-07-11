import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[priority]'
})
export class PriorityDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @Input() priorityNumber: any;

  ngOnInit():void {
    let li = this.el.nativeElement;
    this.renderer.setStyle(li, 'list-style-image', "url(/assets/icons/"+this.priorityNumber+"-32.png)")
    //this.renderer.setStyle(li, 'background', 'gray')
  }

}
