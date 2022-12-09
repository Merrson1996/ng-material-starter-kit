import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductDetailsModel } from '../../models/product-details.model';
import { DeleteProductService } from '../../services/delete-product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteProductComponent {
  readonly List$: Observable<ProductDetailsModel[]> = this._deleteProductService.getAll();
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  readonly RefreshedList$: Observable<ProductDetailsModel[]> = this.refresh$.pipe(switchMap(data => this._deleteProductService.getAll()));



  constructor(private _deleteProductService: DeleteProductService) {
  }

  delete(id: string): void {
    this._deleteProductService.delete(id).subscribe(() => this._refreshSubject.next());
  }
}
