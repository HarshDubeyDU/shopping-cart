import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'header',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    @Input() customerImageUrl: string = "/images/no-image.svg";
}
