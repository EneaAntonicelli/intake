import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HardStopsComponent } from "./page-hard-stops.component";

describe("HardStopsComponent", () => {
  let component: HardStopsComponent;
  let fixture: ComponentFixture<HardStopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HardStopsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardStopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
