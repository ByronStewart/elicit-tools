import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable, BehaviorSubject, combineLatest } from "rxjs";
import { switchMap } from "rxjs/operators";
import { MemberDocument } from "src/models/documents";

@Injectable({
  providedIn: "root"
})
export class RosterService {
  limit$: BehaviorSubject<number>;
  rank$: BehaviorSubject<number>;
  constructor(private db: AngularFirestore) {
    this.limit$ = new BehaviorSubject(3);
    this.rank$ = new BehaviorSubject(2);
  }
  getRoster() {
    return combineLatest(this.limit$, this.rank$).pipe(
      switchMap(([limit, rank]) =>
        this.db
          .collection<MemberDocument>("members", ref =>
            ref
              .where("guild", "==", "Elicit")
              .where("rank", "<=", rank)
              .limit(limit)
          )
          .valueChanges()
      )
    );
  }
}
