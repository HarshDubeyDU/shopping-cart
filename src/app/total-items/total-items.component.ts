import {Component, Input} from '@angular/core';

@Component({
  selector: 'total-items',
  imports: [],
  templateUrl: './total-items.component.html',
  styleUrl: './total-items.component.css'
})
export class TotalItemsComponent {
    @Input({ required: true }) totalItems = 1;
}
