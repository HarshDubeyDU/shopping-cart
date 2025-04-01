import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CartItemComponent} from './cart-item/cart-item.component';
import {Cart} from './interface/cart';

@Component({
  selector: 'app-root',
    imports: [RouterOutlet, CartItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    cartItem: Cart = {
        itemImageUrl: "/images/pizza.png",
        itemImageDescription: "Italy Pizza",
        itemName: "Italy Pizza",
        itemDescription: "Extra cheese and toping",
        itemQuantity: 1,
        itemPrice: 681
    };
}
