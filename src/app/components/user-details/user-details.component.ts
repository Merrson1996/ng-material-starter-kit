import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserDetailsService } from '../../services/user-details.service';
import {RegisterModel} from "../../models/register.model";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {
  readonly userDetails$: Observable<RegisterModel> = this._activatedRoute.params.pipe
  (switchMap(data => this._userDetailsService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _userDetailsService: UserDetailsService) {
  }
}
