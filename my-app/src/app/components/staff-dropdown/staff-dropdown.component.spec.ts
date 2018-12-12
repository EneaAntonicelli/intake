import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDropdownComponent } from './staff-dropdown.component';

describe('StaffDropdownComponent', () => {
  let component: StaffDropdownComponent;
  let fixture: ComponentFixture<StaffDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
