import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { RosterComponent } from "./views/roster/roster.component";
import { EternalPalaceComponent } from "./views/eternal-palace/eternal-palace.component";
import { BossComponent } from "./views/boss/boss.component";
import { PlayerComponent } from "./views/player/player.component";

const routes: Routes = [
  {
    path: "roster",
    component: RosterComponent
  },
  {
    path: "eternal-palace",
    component: EternalPalaceComponent
  },
  {
    path: "boss/:id",
    component: BossComponent
  },
  {
    path: "player/:name",
    component: PlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
