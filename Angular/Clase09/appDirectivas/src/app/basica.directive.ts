import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: "[basica]"
})
export class BasicaDirective {
  constructor(private el: ElementRef, private renderer: Renderer2){}

  @Input("basica") colorPorDefecto: string = "white"
  @Input() colorHover: string = "pink"

  //@Input() basica: string = "white"

  @HostListener("mouseenter") mouseEntro() {
    this.renderer.setStyle(this.el.nativeElement, "background-color", this.colorHover)
  }

  @HostListener("mouseleave") mouseSalio() {
    this.renderer.setStyle(this.el.nativeElement, "background-color", this.colorPorDefecto)
  }

  ngOnInit(){
    //this.el.nativeElement.style.backgroundColor = "red"
    this.renderer.setStyle(this.el.nativeElement, "background-color", this.colorPorDefecto)
  }
}