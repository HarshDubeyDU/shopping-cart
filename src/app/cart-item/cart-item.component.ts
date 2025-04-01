import {Component, Input} from '@angular/core';
import {Cart} from '../interface/cart';
import {ItemImageComponent} from '../item-image/item-image.component';
import {ItemDetailComponent} from '../item-detail/item-detail.component';

@Component({
  selector: 'cart-item',
    imports: [
        ItemImageComponent,
        ItemDetailComponent
    ],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
    @Input({ required: true })
    cartItem: Cart = {
        itemDescription: '',
        itemName: '',
        itemPrice: 0,
        itemQuantity: 0
    };
}
