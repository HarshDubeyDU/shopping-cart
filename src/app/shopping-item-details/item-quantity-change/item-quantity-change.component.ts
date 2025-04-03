import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'item-quantity-change',
    imports: [NgOptimizedImage],
  templateUrl: './item-quantity-change.component.html',
  styleUrl: './item-quantity-change.component.css'
})
export class ItemQuantityChangeComponent {
    arrows: Arrow[] = [
        {
            url: "icons/caret-up.svg",
            alt: "increase item quantity"
        },
        {
            url: "icons/caret-down.svg",
            alt: "decrease item quantity"
        }
    ];

    fillArrow(url: string): string {
        let urlLength = url.length;
        return url.substring(0, urlLength - 4) + "-fill.svg";
    }

    emptyArrow(url: string): string {
        let urlLength = url.length;
        return url.substring(0, urlLength - 9) + ".svg";
    }

    // TODO: communicate to service for increasing and decreasing the item quantity
}

interface Arrow {
    url: string;
    alt: string;
}
