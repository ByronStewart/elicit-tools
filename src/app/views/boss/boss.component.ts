import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { ItemService } from "src/app/services/item.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-boss",
  templateUrl: "./boss.component.html",
  styleUrls: ["./boss.component.scss"]
})
export class BossComponent implements OnInit {
  bossid: string;
  constructor(private route: ActivatedRoute, private items: ItemService) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(map(params => params.get("id")))
      .subscribe(val => (this.bossid = val));
  }
}
