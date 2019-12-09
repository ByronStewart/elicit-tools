import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import {
  from,
  Subscription,
  Observable,
  zip,
  of,
  combineLatest,
  concat
} from "rxjs";
import { ItemService } from "src/app/services/item.service";
import {
  map,
  switchMap,
  tap,
  concatAll,
  mergeAll,
  toArray,
  mergeMap,
  switchAll,
  combineAll,
  concatMap
} from "rxjs/operators";
import { AngularFirestore } from "@angular/fire/firestore";
import {
  ItemDocument,
  SimDocument,
  ItemsJoinedSims
} from "src/models/documents";

@Component({
  selector: "app-boss",
  templateUrl: "./boss.component.html",
  styleUrls: ["./boss.component.scss"]
})
export class BossComponent implements OnInit {
  joined$: Observable<ItemsJoinedSims[]>;
  constructor(private route: ActivatedRoute, private db: AngularFirestore) {}
  ngOnInit() {
    this.joined$ = this.route.paramMap.pipe(
      map(params => params.get("id")),
      switchMap(id =>
        this.db
          .collection<ItemDocument>("items", ref =>
            ref.where("droppedBy", "==", id)
          )
          .valueChanges()
      ),
      switchMap(items => {
        const itemIds = items.map(item => item.id);
        return combineLatest(
          of(items),
          combineLatest(
            itemIds.map(id =>
              this.db
                .collection<SimDocument>("sims", ref =>
                  ref.where("item_id", "==", id.toString())
                )
                .valueChanges()
            )
          )
        );
      }),
      map(([items, sims]) =>
        items.map(item => {
          return {
            ...item,
            sims:
              sims.find(sims => {
                if (sims[0]) {
                  return sims[0].item_id === item.id.toString();
                } else {
                  return false;
                }
              }) || []
          };
        })
      )
    );
  }
}
