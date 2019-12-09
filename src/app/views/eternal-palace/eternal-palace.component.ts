import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { BossDocument } from "src/models/documents";
import { BossDetailsService } from "src/app/services/boss-details.service";

@Component({
  selector: "app-eternal-palace",
  templateUrl: "./eternal-palace.component.html",
  styleUrls: ["./eternal-palace.component.scss"]
})
export class EternalPalaceComponent implements OnInit {
  bosses$: Observable<BossDocument[]>;
  constructor(private db: AngularFirestore, private bds: BossDetailsService) {}

  ngOnInit() {
    this.bosses$ = this.bds.bossList$;
  }
}
