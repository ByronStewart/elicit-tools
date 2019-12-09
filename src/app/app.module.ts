import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { RosterComponent } from "./views/roster/roster.component";
import { EternalPalaceComponent } from "./views/eternal-palace/eternal-palace.component";
import { BossComponent } from "./views/boss/boss.component";
import { ItemClassPipe } from "./pipes/item-class.pipe";
import { InventoryTypePipe } from "./pipes/inventory-type.pipe";
import { ItemSubClassPipe } from "./pipes/item-sub-class.pipe";
import { PlayerClassPipe } from "./pipes/player-class.pipe";
import { PlayerComponent } from "./views/player/player.component";
import { MemberRankPipe } from "./pipes/member-rank.pipe";
import { ClarityModule } from "@clr/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    RosterComponent,
    EternalPalaceComponent,
    BossComponent,
    ItemClassPipe,
    InventoryTypePipe,
    ItemSubClassPipe,
    PlayerClassPipe,
    PlayerComponent,
    MemberRankPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
