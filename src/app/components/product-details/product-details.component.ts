import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ProductModel} from '../../models/product.model';
import {ProductcwService} from '../../services/productcw.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
  readonly productDetails$: Observable<ProductModel> = this._activatedRoute.params
    .pipe(switchMap(data => this._productcwService.getOne(data['product'])));

  constructor(private _activatedRoute: ActivatedRoute, private _productcwService: ProductcwService) {
  }
}
