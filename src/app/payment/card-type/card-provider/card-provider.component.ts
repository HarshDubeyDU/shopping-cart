import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'card-provider',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './card-provider.component.html',
  styleUrls: ['./card-provider.component.css', '../../payment.component.css']
})
export class CardProviderComponent {
    @Input() cardProviderImageUrl: string = "/images/master-card.svg";
    @Input() cardProviderImageAlt: string = "Master card";

    imagePlaceholder = "/images/card-provider-placeholder.svg";
}
