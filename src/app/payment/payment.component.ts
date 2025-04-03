import {Component} from '@angular/core';
import {CardTypeComponent} from './card-type/card-type.component';
import {HeaderComponent} from './header/header.component';
import {CardImage} from './card-type/interface/card-image';

@Component({
  selector: 'app-payment',
    imports: [CardTypeComponent, HeaderComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
    supportedCards: CardImage[] = [
        {
            url: "/images/master-card.svg",
            alt: "Master Card"
        },
        {
            url: "/images/visa.svg",
            alt: "Visa"
        },
        {
            url: "/images/rupay.svg",
            alt: "Rupay"
        },
        {
            url: "/images/see-all.svg",
            alt: "See All"
        }
    ];
}
