import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { BossDocument } from "src/models/documents";

@Component({
  selector: "app-eternal-palace",
  templateUrl: "./eternal-palace.component.html",
  styleUrls: ["./eternal-palace.component.scss"]
})
export class EternalPalaceComponent implements OnInit {
  bosses$: Observable<BossDocument[]>;
  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.bosses$ = this.db
      .collection<BossDocument>("bosses", ref => ref.orderBy("encounterOrder"))
      .valueChanges();
  }
}
