import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {combineLatest, map, Observable} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {CategoryAdvancedService} from '../../services/category-advanced.service';
import {ProductsAdvancedService} from '../../services/products-advanced.service';

@Component({
  selector: 'app-filtred-list-product-category',
  templateUrl: './filtred-list-product-category.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltredListProductCategoryComponent {
  readonly Categories$: Observable<string[]> = this._categoryAdvancedService.getAll();
  readonly Products$: Observable<ProductModel[]> = combineLatest([
    this._productsAdvancedService.getAll(),
    this._activatedRoute.params
  ]).pipe(map(([products,params]) => {
    return products.filter((product:ProductModel)=>product.category === params['category']);
  }));

  constructor(private _categoryAdvancedService: CategoryAdvancedService, private _productsAdvancedService: ProductsAdvancedService, private _activatedRoute: ActivatedRoute) {
  }
}
