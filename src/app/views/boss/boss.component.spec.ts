import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BossComponent } from "./boss.component";
import { AngularFirestore } from "@angular/fire/firestore";
import { BossDetailsService } from "src/app/services/boss-details.service";
import { ActivatedRoute } from "@angular/router";

describe("BossComponent", () => {
  let component: BossComponent;
  let fixture: ComponentFixture<BossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BossComponent],
      providers: [AngularFirestore, BossDetailsService, ActivatedRoute]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
