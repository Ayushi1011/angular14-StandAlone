import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFoo]',
  standalone: true,
})
export class FooDirective {
  constructor(private el: ElementRef) {}

  @Input()
  defaultColor!: string;

  @Input('appHighlight')
  highlightColor!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
