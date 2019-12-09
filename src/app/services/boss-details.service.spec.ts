import { TestBed } from "@angular/core/testing";

import { BossDetailsService } from "./boss-details.service";
import { AngularFirestore } from "@angular/fire/firestore";

describe("BossDetailsService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AngularFirestore]
    })
  );

  it("should be created", () => {
    const service: BossDetailsService = TestBed.get(BossDetailsService);
    expect(service).toBeTruthy();
  });
});
