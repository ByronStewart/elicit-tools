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
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user$ = this.afAuth.authState;
  }

  redirectUrl: string;

  login(email: string, password: string): Observable<boolean> {
    const user = this.afAuth.auth.signInWithEmailAndPassword(email, password);
    return from(user).pipe(
      tap(user => console.log(user)),
      map(user => !!user),
      take(1)
    );
  }

  async logout() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(["/"]);
  }
}
