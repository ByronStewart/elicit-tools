import { Component, OnInit } from "@angular/core";
import { RosterService } from "src/app/services/roster.service";
import { Observable } from "rxjs";
import { MemberDocument } from "src/models/documents";

@Component({
  selector: "app-roster",
  templateUrl: "./roster.component.html",
  styleUrls: ["./roster.component.scss"]
})
export class RosterComponent implements OnInit {
  roster$: Observable<MemberDocument[]>;
  currRank$: Observable<number>;
  currLimit$: Observable<number>;
  constructor(public rs: RosterService) {}

  ngOnInit() {
    this.roster$ = this.rs.getRoster();
    this.currRank$ = this.rs.rank$;
    this.currLimit$ = this.rs.limit$;
  }

  changeLimit(x: string) {
    this.rs.limit$.next(+x);
  }

  changeRank(x: string) {
    this.rs.rank$.next(+x);
  }
}
