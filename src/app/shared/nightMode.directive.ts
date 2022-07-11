import { Directive, ElementRef, Renderer2, OnInit, Input, } from '@angular/core';
import { Tasks } from 'src/tasks.service';

@Directive({
  selector: '[nightMode]'
})
export class NightModeDirective  {
 

  constructor(
      private el: ElementRef,
      private renderer: Renderer2, 
      private taskService: Tasks

      ) { 
      this.taskService.subNightMode$().subscribe(data => this.isNightMode = data)
  }
  
  @Input() isNightMode: boolean = false

  ngDoCheck() {
    let li = this.el.nativeElement;
    if(this.isNightMode) {
        this.renderer.addClass(li, "mainNightMode")
      }
      else {
          this.renderer.removeClass(li, "mainNightMode")
      }
  }

  

}
