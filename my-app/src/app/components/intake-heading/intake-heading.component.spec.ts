import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IntakeHeadingComponent } from "./intake-heading.component";

describe("IntakeHeadingComponent", () => {
  let component: IntakeHeadingComponent;
  let fixture: ComponentFixture<IntakeHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntakeHeadingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakeHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
