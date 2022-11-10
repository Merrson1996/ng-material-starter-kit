import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-menu',
  styleUrls: ['./menu.component.scss'],
  templateUrl: './menu.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  readonly categories$: Observable<string[]> = this._categoriesService.getAll();

  constructor(private _categoriesService: CategoriesService) {
  }
}
