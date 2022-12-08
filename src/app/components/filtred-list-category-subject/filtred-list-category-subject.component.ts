import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { CategoryAdvancedService } from '../../services/category-advanced.service';
import { ProductsAdvancedService } from '../../services/products-advanced.service';

@Component({
  selector: 'app-filtred-list-category-subject',
  templateUrl: './filtred-list-category-subject.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltredListCategorySubjectComponent {
  readonly category$: Observable<string[]> = this._categoryAdvancedService.getAll();

  private _categorySubject: Subject<string> = new Subject<string>();

  public Category$: Observable<string> = this._categorySubject.asObservable();

  readonly products$: Observable<ProductModel[]> = combineLatest([

    this._productsAdvancedService.getAll(),

    this.Category$

  ]).pipe(map(([products, category]: [ProductModel[], string]) => {

    return products.filter(product => product.category === category);
  }))
    ;

  constructor(private _categoryAdvancedService: CategoryAdvancedService, private _productsAdvancedService: ProductsAdvancedService) {
  }

  selectCategory(category: string): void {
    this._categorySubject.next(category)
  }
}
