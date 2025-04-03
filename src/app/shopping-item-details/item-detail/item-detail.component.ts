import {Component, Input} from '@angular/core';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {
    @Input({ required: true}) itemName = "";
    @Input({ required: true}) itemDescription = "";
}
