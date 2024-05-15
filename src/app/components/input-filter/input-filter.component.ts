import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './input-filter.component.html',
  styleUrl: './input-filter.component.scss'
})
export class InputFilterComponent {
  @Output() setFilter = new EventEmitter<void>()
  
  constructor(
    private _fb: FormBuilder
  ) {}
  
  public input = this._fb.group({
    searchInfo: ['', Validators.required]
  })

  @Output() searchInput = this.input.controls.searchInfo
  
  public applyFilter() {
    this.setFilter.emit();
  }
}
