import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  readonly registerf: FormGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    city: new FormControl(),
    street: new FormControl(),
    number: new FormControl(),
    zipcode: new FormControl(),
    phone: new FormControl(),
  });

  constructor(private _registerService: RegisterService) {
  }

  onRegisterfSubmitted(registerf: FormGroup): void {
    this._registerService.create({ email: registerf.get('email')?.value,
      name: registerf.get('name')?.value,
      adress: registerf.get('city')?.value,
      password: registerf.get('password')?.value,
      phone: registerf.get("phone")?.value,
      username:registerf.get("username")?.value ,

    }).subscribe();
  }
}

