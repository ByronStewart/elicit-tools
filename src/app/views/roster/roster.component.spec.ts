import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RosterComponent } from "./roster.component";
import { AngularFirestore } from "@angular/fire/firestore";
import { ActivatedRoute } from "@angular/router";

describe("RosterComponent", () => {
  let component: RosterComponent;
  let fixture: ComponentFixture<RosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RosterComponent],
      providers: [AngularFirestore, ActivatedRoute]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
