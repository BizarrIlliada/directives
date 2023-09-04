import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2, RendererStyleFlags2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'silver';
  @Input() defaultTextColor = 'black';
  @Input() highlightTextColor = 'red'
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    this.color = this.defaultTextColor;
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue', RendererStyleFlags2.Important)
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  @HostBinding('style.color') color: string = this.defaultTextColor;
  @HostBinding('style.transition') transition = '0.3s'

  @HostListener('mouseenter') mouseenter(eventData: Event /** custom events too **/) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'gray')
    this.backgroundColor = this.highlightColor;
    this.color = this.highlightTextColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event /** custom events too **/) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = this.defaultColor;
    this.color = this.defaultTextColor;
  }

  @HostListener('click') onclick(eventData: Event) {
    console.log(eventData); //undefined
    
    this.backgroundColor = this.defaultColor;
    this.color = this.defaultTextColor;
  }
}
