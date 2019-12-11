import { Component } from "@angular/core";
import { AuthService } from "./auth/auth.service";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Elicit Raid Tools";
  loginModalOpen = false;
  isLoggedIn: boolean;
  constructor(public auth: AuthService, private router: Router) {
    this.auth.user$
      .pipe(map(user => !!user))
      .subscribe(x => (this.isLoggedIn = x));
  }
  toggleLoginModal() {
    this.loginModalOpen = !this.loginModalOpen;
  }

  goToAdmin() {
    if (this.auth.isLoggedIn) {
      this.router.navigate(["/admin"]);
    } else {
      this.toggleLoginModal();
    }
  }
}
