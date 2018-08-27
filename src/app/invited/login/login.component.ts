import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { Logger, I18nService } from '@app/core';
import { AuthService } from '@app/shared/services';
import { MotorolaAuth } from '@app/shared/constanst';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public urlApiOauth2: string = MotorolaAuth.urlAuthLogin;
  public error: string;
  public isLoading = false;

  constructor(private router: Router,
              private activateRouter: ActivatedRoute,
              private formBuilder: FormBuilder,
              private i18nService: I18nService,
              private authService: AuthService) {
  }

  ngOnInit() {
      let code_oauth = this.activateRouter.snapshot.queryParams['code'];
      if(code_oauth){
        this.getAccessToken(code_oauth);
      }
  }

  private getAccessToken(code: string){
    this.authService.getAccessToken("123", code)
      .subscribe((data: any) => {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
        localStorage.setItem("token_type", data.token_type);
        this.router.navigate(['/home']);

      });
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }
}
