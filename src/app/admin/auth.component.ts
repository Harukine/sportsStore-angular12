import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AuthService} from "../model/auth.service";

@Component({
  templateUrl: "auth.component.html"
})
export class AuthComponent {
  // @ts-ignore
  public username: string;
  // @ts-ignore
  public password: string;
  public errorMessage: string | undefined;

  constructor(private router: Router,
              private auth: AuthService) {
  }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.auth.authenticate(this.username, this.password)
        .subscribe(response => {
          if (response) {
            this.router.navigateByUrl("/admin/main");
          }
          this.errorMessage = "Authentication Failed";
        })
    } else {
      this.errorMessage = "Form Data Invalid";
    }
  }
}
