import { Component, OnInit } from "@angular/core";
import { RosterService } from "src/app/services/roster.service";
import { Observable } from "rxjs";
import { MemberDocument } from "src/models/documents";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-roster",
  templateUrl: "./roster.component.html",
  styleUrls: ["./roster.component.scss"]
})
export class RosterComponent implements OnInit {
  roster$: Observable<MemberDocument[]>;
  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.roster$ = this.db
      .collection<MemberDocument>("members", ref =>
        ref.where("guild", "==", "Elicit").where("rank", "in", [0, 1, 3, 5])
      )
      .valueChanges();
  }
}
