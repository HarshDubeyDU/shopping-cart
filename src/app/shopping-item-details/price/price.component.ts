import {Component, Input} from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'price',
    imports: [CurrencyPipe],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent {
    @Input({ required: true }) itemPrice = 0;
}
