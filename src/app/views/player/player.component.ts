import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { MemberDocument } from "src/models/documents";
import { map, switchMap } from "rxjs/operators";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.scss"]
})
export class PlayerComponent implements OnInit {
  player$: Observable<MemberDocument>;
  constructor(private db: AngularFirestore, private route: ActivatedRoute) {}

  ngOnInit() {
    this.player$ = this.route.paramMap.pipe(
      map(params => params.get("name")),
      switchMap(name =>
        this.db
          .collection<MemberDocument>("members", ref =>
            ref.where("name", "==", name)
          )
          .valueChanges()
      ),
      map(docs => docs[0])
    );
  }
}
