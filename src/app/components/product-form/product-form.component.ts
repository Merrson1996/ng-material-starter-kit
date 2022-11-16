import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductformService } from '../../services/productform.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    prices: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    image: new FormControl()
  });
  readonly categories$: Observable<string[]> = this._categoriesService.getAll();

  constructor(private _productformService: ProductformService,
    private _categoriesService: CategoriesService) {
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this._productformService.create({
      title: productForm.get("title")?.value,
      category: productForm.get("category")?.value,
      description: productForm.get("description")?.value,
      price: productForm.get('Prices')?.value,
      image: productForm.get("image")?.value,
    }).subscribe();
  }
}
