import {Component, Input} from '@angular/core';
import {Cart} from '../interface/cart';
import {NgIf} from '@angular/common';
import {CartItemComponent} from '../cart-item/cart-item.component';

@Component({
  selector: 'display-cart-items',
    imports: [
        NgIf,
        CartItemComponent,
    ],
  templateUrl: './display-cart-items.component.html',
  styleUrl: './display-cart-items.component.css'
})
export class DisplayCartItemsComponent {
    @Input() cartItems: Cart[] = [];
}
