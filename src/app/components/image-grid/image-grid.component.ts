import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss'],
  standalone: true,
  imports: [MaterialModule, CommonModule, CardComponent]
})
export class ImageGridComponent {
  @Input() images: any[] = []; // Recibimos las imágenes desde el componente principal (AppComponent)

  constructor() {}
}

