import {Component, Input} from '@angular/core';
import { CardProviderComponent } from './card-provider/card-provider.component';
import {CardImage} from './interface/card-image';

@Component({
  selector: 'card-type',
    imports: [
        CardProviderComponent
    ],
  templateUrl: './card-type.component.html',
  styleUrl: './card-type.component.css'
})
export class CardTypeComponent {
    @Input() cardProviderImage: CardImage[] = [];
}
