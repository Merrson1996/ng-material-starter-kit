import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NewemployeeService } from '../../services/newemployee.service';

@Component({
  selector: 'app-newemployee-form',
  styleUrls: ['./newemployee-form.component.scss'],
  templateUrl: './newemployee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewemployeeFormComponent {
  readonly newemployee: FormGroup = new FormGroup(
    {
      name: new FormControl(),
      age: new FormControl(),
      salary: new FormControl()
    });

  constructor(private _newemployeeService: NewemployeeService) {
  }

  onNewemployeeSubmitted(newemployee: FormGroup): void {
    this._newemployeeService.Create({
      name:newemployee.get("name")?.value,
      age:newemployee.get("age")?.value,
      salary:newemployee.get("salary")?.value,
    }).subscribe();
  }
}
