import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
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
import { HomeComponent } from "./views/home/home.component";
import { AdminComponent } from "./views/admin/admin.component";

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
    MemberRankPipe,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
