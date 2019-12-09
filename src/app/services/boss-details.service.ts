import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { BossDocument } from "src/models/documents";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class BossDetailsService {
  bossList$: Observable<BossDocument[]>;

  constructor(private db: AngularFirestore) {
    this.bossList$ = this.db
      .collection<BossDocument>("bosses", ref => ref.orderBy("encounterOrder"))
      .valueChanges();
  }

  getBossNameById(id: string) {
    return this.bossList$.pipe(
      map(bossList => bossList.find(boss => boss.id === id)),
      map(boss => boss.name)
    );
  }
}
