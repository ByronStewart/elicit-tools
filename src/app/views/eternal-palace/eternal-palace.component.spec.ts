import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EternalPalaceComponent } from './eternal-palace.component';

describe('EternalPalaceComponent', () => {
  let component: EternalPalaceComponent;
  let fixture: ComponentFixture<EternalPalaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EternalPalaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EternalPalaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
