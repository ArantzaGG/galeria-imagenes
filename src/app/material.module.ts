import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'



@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, MatButtonModule, MatIconModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatSlideToggleModule],
  exports: [CommonModule, MatToolbarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, MatButtonModule, MatIconModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatSlideToggleModule]
})
export class MaterialModule { }
