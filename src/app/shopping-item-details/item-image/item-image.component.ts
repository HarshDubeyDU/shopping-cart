import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'item-image',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './item-image.component.html',
  styleUrl: './item-image.component.css'
})
export class ItemImageComponent {
    _src = "/images/no-image.svg";
    _alt = "no image";

    @Input()
    set src(src: string | undefined) {
        this._src = src ? src : this._src;
    }

    @Input()
    set alt(alt: string | undefined) {
        this._alt = alt ? alt : this._alt;
    }
}
