import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  standalone: true,
  imports: [MaterialModule],
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<{
    query: string;
    category: string | null;
  }>();
  @Output() nextPage = new EventEmitter<string>();
  @Output() previousPage = new EventEmitter<string>();
  @Output() random = new EventEmitter<void>();

  searchForm: FormGroup;

  categories: { value: string; viewValue: string }[] = [
    { value: 'people', viewValue: 'Personas' },
    { value: 'fashion', viewValue: 'Moda' },
    { value: 'nature', viewValue: 'Naturaleza' },
    { value: 'science', viewValue: 'Ciencia' },
    { value: 'education', viewValue: 'Educación' },
    { value: 'feelings', viewValue: 'Sentimientos' },
  ];

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      query: [''],
      category: [null],
    });
  }

  onSearchClick() {
    const queryControl = this.searchForm.get('query');
    const categoryControl = this.searchForm.get('category');
    if (queryControl?.value || categoryControl?.value) {
      this.search.emit({query: queryControl?.value, category: categoryControl?.value});
    } else {
      queryControl?.markAsTouched();
    }
  }

  onNextPage(query: string) {
    this.nextPage.emit(query);
  }

  onPreviousPage(query: string) {
    this.previousPage.emit(query);
  }

  onRandomClick() {
    this.random.emit();
  }
}
