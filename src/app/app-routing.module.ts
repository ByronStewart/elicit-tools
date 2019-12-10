import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RosterComponent } from "./views/roster/roster.component";
import { EternalPalaceComponent } from "./views/eternal-palace/eternal-palace.component";
import { BossComponent } from "./views/boss/boss.component";
import { PlayerComponent } from "./views/player/player.component";
import { HomeComponent } from "./views/home/home.component";
import { AdminComponent } from "./views/admin/admin.component";
import { AuthGuard } from "./auth/auth.guard";

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
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
