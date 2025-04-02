import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'item-quantity-change',
    imports: [
        NgForOf,
        NgOptimizedImage
    ],
  templateUrl: './item-quantity-change.component.html',
  styleUrl: './item-quantity-change.component.css'
})
export class ItemQuantityChangeComponent {
    arrows: Arrow[] = [
        {
            url: "icons/arrow-up-short.svg",
            alt: "increase item quantity"
        },
        {
            url: "icons/arrow-down-short.svg",
            alt: "decrease item quantity"
        }
    ];
}

interface Arrow {
    url: string;
    alt: string;
}
