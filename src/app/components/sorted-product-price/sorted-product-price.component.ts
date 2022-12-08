import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable, of} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsAdvancedService } from '../../services/products-advanced.service';
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-sorted-product-price',
  templateUrl: './sorted-product-price.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortedProductPriceComponent {
  private _ordersSubject: BehaviorSubject<string> = new BehaviorSubject<string>("asc");

  public orders$: Observable<string> = this._ordersSubject.asObservable();

  readonly products$: Observable<ProductModel[]> = combineLatest([

    this._productsAdvancedService.getAll(),

    this.orders$

    ]).pipe(map(([products, order]:[ProductModel[],string])=> {

      return products.sort((a,b) =>  {

          if ( a.price > b.price) return  order  ===  "asc" ? 1 : -1;

          if (a.price < b.price)  return  order ===  "desc" ? 1 : -1;

          return 0;
        })
    }));
  public orders: Observable<string[]> = of(["asc","desc"])
  constructor(private _productsAdvancedService: ProductsAdvancedService) {
  }

  sort(order: string): void {
    this._ordersSubject.next(order)
  }
}
