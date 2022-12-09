import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { EmployesModel } from '../../models/employes.model';
import { EmployesService } from '../../services/employes.service';

@Component({
  selector: 'app-employes-list-sort-salary',
  templateUrl: './employes-list-sort-salary.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployesListSortSalaryComponent {
  private _employeSubject: BehaviorSubject<string> = new BehaviorSubject<string>("aaa");

  public employe$: Observable<string> = this._employeSubject.asObservable();

  readonly salary$: Observable<EmployesModel[]> = this._employesService.getAll();

  public employe: Observable<string[]> = of(["aaa","zzz"])

  constructor(private _employesService: EmployesService) {
  }

  sort(employe: string): void {
    this._employeSubject.next(employe);
  }
}
