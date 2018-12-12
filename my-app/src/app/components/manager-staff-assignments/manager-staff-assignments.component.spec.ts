import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerStaffAssignmentsComponent } from './manager-staff-assignments.component';

describe('ManagerStaffAssignmentsComponent', () => {
  let component: ManagerStaffAssignmentsComponent;
  let fixture: ComponentFixture<ManagerStaffAssignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerStaffAssignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerStaffAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
