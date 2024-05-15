import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { InputFilterComponent } from '../input-filter/input-filter.component';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [
        InputFilterComponent
    ],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss'
})
export class MainComponent implements OnChanges {
    @Input() productsList!: Product[];
    @Input() tableHeaders!: string[] | undefined;
    isInputOpen: boolean[] = [];
    filterInput!: FormControl<string>;

    ngOnChanges() {
        if (this.tableHeaders) {
            this.isInputOpen = new Array(this.tableHeaders.length).fill(false);
        }
    }

    public toggleFilter(index: number): void {
        if (this.tableHeaders && this.tableHeaders.length && this.isInputOpen.length) {
            this.isInputOpen[index] = !this.isInputOpen[index];
            console.log(this.isInputOpen[index]);
        }
    }

    applyFilter(index: number) {
      if (this.tableHeaders && this.tableHeaders.length && this.isInputOpen.length) {
        console.log(this.tableHeaders[index].toLowerCase())
        if (this.tableHeaders[index].toLowerCase() == 'бренд') {
          this.productsList.filter(product => {
            product.brand.toLowerCase() == this.filterInput.value.toLowerCase()
          })
        }
        console.log(this.productsList)
        this.isInputOpen[index] = !this.isInputOpen[index];
        console.log(this.isInputOpen[index]);
      }
    }
}
