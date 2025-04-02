import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Cart} from './interface/cart';
import {DisplayCartItemsComponent} from './display-cart-items/display-cart-items.component';

@Component({
  selector: 'app-root',
    imports: [RouterOutlet, DisplayCartItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    cartItems: Cart[] = [
        {
            itemImageUrl: "/images/pizza.png",
            itemImageDescription: "Italy Pizza image",
            itemName: "Italy Pizza",
            itemDescription: "Extra cheese and toping",
            itemQuantity: 1,
            itemPrice: 681
        },
        {
            itemImageUrl: "https://images.jdmagicbox.com/v2/comp/delhi/m1/011pxx11.xx11.190509193239.y1m1/catalogue/thali-meals-malviya-nagar-delhi-take-away-joints-amfo4yyic7.jpg",
            itemImageDescription: "Combo Plate image",
            itemName: "Combo Plate",
            itemDescription: "Every day meal",
            itemQuantity: 1,
            itemPrice: 681
        },
        {
            itemImageUrl: "/images/spanish rice.png",
            itemImageDescription: "Spanish Rice image",
            itemName: "Spanish Rice",
            itemDescription: "Wholesome spice",
            itemQuantity: 1,
            itemPrice: 681
        }
    ];
}
