import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() image: any;
  @Output() favoriteToggled = new EventEmitter<any>();

  toggleFavorite() {
    this.favoriteToggled.emit(this.image);
    console.log('esta imagen me gusta');
  }
}
