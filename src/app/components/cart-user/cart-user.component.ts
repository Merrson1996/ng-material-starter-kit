import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CartUserModel } from '../../models/cart-user.model';
import { CartUserService } from '../../services/cart-user.service';

@Component({
  selector: 'app-cart-user',
  templateUrl: './cart-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartUserComponent {
  readonly cartUser$: Observable<CartUserModel> = this._activatedRoute.params
    .pipe(switchMap(data => this._cartUserService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _cartUserService: CartUserService) {
  }
}
