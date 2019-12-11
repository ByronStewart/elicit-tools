import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { tap, map, take } from "rxjs/operators";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user$: Observable<firebase.User>;
  isLoggedIn: boolean = false;
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user$ = this.afAuth.authState;
    this.user$
      .pipe(map(user => !!user))
      .subscribe(isLoggedIn => (this.isLoggedIn = isLoggedIn));
  }

  redirectUrl: string;

  async login(email: string, password: string) {
    const user = await this.afAuth.auth.signInWithEmailAndPassword(
      email,
      password
    );
    return !!user;
  }

  async logout() {
    await this.afAuth.auth.signOut();
    this.router.navigate(["/"]);
  }
}
