import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'delete-item',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './delete-item.component.html',
  styleUrl: './delete-item.component.css'
})
export class DeleteItemComponent {
    @Input() height = 16;
    @Input() width = 16;

    imageUrl = "/icons/trash.svg";
    imageAlt = "Delete Item";

    hover() {
        this.imageUrl = "/icons/trash-fill.svg";
    }

    hoverend() {
        this.imageUrl = "/icons/trash.svg";
    }
}
