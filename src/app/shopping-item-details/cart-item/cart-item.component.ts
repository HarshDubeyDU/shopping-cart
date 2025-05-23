import {Component, Input} from '@angular/core';
import {Cart} from '../interface/cart';
import {ItemImageComponent} from '../item-image/item-image.component';
import {ItemDetailComponent} from '../item-detail/item-detail.component';
import {TotalItemsComponent} from '../total-items/total-items.component';
import {PriceComponent} from '../price/price.component';
import {DeleteItemComponent} from '../delete-item/delete-item.component';
import {ItemQuantityChangeComponent} from '../item-quantity-change/item-quantity-change.component';

@Component({
  selector: 'cart-item',
    imports: [
        ItemImageComponent,
        ItemDetailComponent,
        TotalItemsComponent,
        PriceComponent,
        DeleteItemComponent,
        ItemQuantityChangeComponent
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
