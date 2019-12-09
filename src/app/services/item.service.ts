import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Subject } from "rxjs";
import { BossDocument } from "src/models/documents";
import { switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  boss$: Subject<BossDocument>;
  constructor(private db: AngularFirestore) {
    this.boss$ = new Subject();
  }

  getItemsForBoss(bossId: string) {
    return this.boss$.pipe(
      switchMap(bossId =>
        this.db
          .collection("items", ref =>
            ref.where("droppedBy", "==", bossId).limit(10)
          )
          .valueChanges()
      )
    );
  }
}
