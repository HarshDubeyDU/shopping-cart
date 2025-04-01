import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'item-detail',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {
    @Input({ required: true}) itemName = "";
    @Input({ required: true}) itemDescription = "";
}
