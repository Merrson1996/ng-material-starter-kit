import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  readonly login: FormGroup = new FormGroup({ login: new FormControl(), password: new FormControl() });

  constructor(private _loginService: LoginService) {
  }

  onLoginSubmitted(login: FormGroup): void {
    this._loginService.Create({
      username:login.get("login")?.value,
      password:login.get("password")?.value
    }).subscribe();
  }
}
