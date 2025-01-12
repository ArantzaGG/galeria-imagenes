import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../material.module';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  standalone: true,
  imports: [MaterialModule]
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();
  @Output() nextPage = new EventEmitter<string>();
  @Output() previousPage = new EventEmitter<string>();

    onSearchClick(value: string) {
      this.search.emit(value);
    }

    onNextPage(query: string) {
      this.nextPage.emit(query);
    }
  
    onPreviousPage(query: string) {
      this.previousPage.emit(query);
    }
}
