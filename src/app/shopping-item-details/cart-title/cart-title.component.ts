import {Component, Input} from '@angular/core';

@Component({
  selector: 'cart-title',
  imports: [],
  templateUrl: './cart-title.component.html',
  styleUrl: './cart-title.component.css'
})
export class CartTitleComponent {
    @Input() totalItems = 0;
}
