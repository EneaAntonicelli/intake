import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ManagerStaffWorkloadComponent } from "./manager-staff-workload.component";

describe("ManagerStaffWorkloadComponent", () => {
  let component: ManagerStaffWorkloadComponent;
  let fixture: ComponentFixture<ManagerStaffWorkloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerStaffWorkloadComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerStaffWorkloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
