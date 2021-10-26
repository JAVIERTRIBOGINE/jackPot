import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[hoverGame]'
})
export class HighlightDirective {
    constructor(public el: ElementRef) {

    }

    @HostListener('mouseenter') onMouseEnter() {
        this.display('box-container hover-effects');
    }
    
    @HostListener('mouseleave') onMouseLeave() {
        this.display('box-container');
    }

    private display(value: string) {
        this.el.nativeElement.className = value;
    }
}