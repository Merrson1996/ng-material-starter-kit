import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CartUserModel } from '../../models/cart-user.model';
import { DeleteCartService } from '../../services/delete-cart.service';

@Component({
  selector: 'app-delete-cart',
  templateUrl: './delete-cart.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteCartComponent {
  readonly list$: Observable<CartUserModel[]> = this._deleteCartService.getAll();
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  readonly refreshedList$: Observable<CartUserModel[]> = this.refresh$.pipe(switchMap(data => this._deleteCartService.getAll()));

  constructor(private _deleteCartService: DeleteCartService) {
  }

  delete(id: string): void {
    this._deleteCartService.delete(id).subscribe(() => this._refreshSubject);
  }
}
