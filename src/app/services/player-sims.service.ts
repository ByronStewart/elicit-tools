import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { SimDocument } from "src/models/documents";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PlayerSimsService {
  private equippedSims: SimDocument[];
  constructor(private db: AngularFirestore) {
    this.db
      .collection<SimDocument>("sims", ref =>
        ref.where("isEquipped", "==", true)
      )
      .valueChanges()
      .subscribe(x => (this.equippedSims = x));
  }

  getSimDelta(itemSim: SimDocument) {
    const currSim = this.equippedSims.find(
      sim => sim.player_name === itemSim.player_name
    );
    return itemSim.dps_mean - currSim.dps_mean;
  }
}
