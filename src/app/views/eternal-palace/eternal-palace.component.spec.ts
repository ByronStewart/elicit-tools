import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EternalPalaceComponent } from "./eternal-palace.component";
import { AngularFirestore } from "@angular/fire/firestore";
import { ActivatedRoute } from "@angular/router";

describe("EternalPalaceComponent", () => {
  let component: EternalPalaceComponent;
  let fixture: ComponentFixture<EternalPalaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EternalPalaceComponent],
      providers: [AngularFirestore, ActivatedRoute]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EternalPalaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
