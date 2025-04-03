import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ShoppingItemDetailsComponent} from './shopping-item-details/shopping-item-details.component';
import {PaymentComponent} from './payment/payment.component';

@Component({
  selector: 'app-root',
    imports: [RouterOutlet, ShoppingItemDetailsComponent, PaymentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
