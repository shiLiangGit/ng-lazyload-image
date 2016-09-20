import { Component, Input } from '@angular/core';

@Component({
    selector: 'bg-image',
    styles: [`
        div {
            min-width: 1497px;
            width: 100%;
            min-height: 1127px;
            background-position: center;
            background-size: cover;
            transition: opacity 1s;
            opacity: 0;
        }
        .ng2-lazyloaded {
            opacity: 1;
        }
    `],
    template: `
        <div src="https://www.placecage.com/1000/1000" [lazyLoad]="src" [errorImage]="errorImage" offset="0">
    `
})
export class BgImageComponent {
    @Input() src;
    @Input() errorImage;
}
