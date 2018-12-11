import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerNewWorkItemComponent } from './manager-new-work-item.component';

describe('ManagerNewWorkItemComponent', () => {
  let component: ManagerNewWorkItemComponent;
  let fixture: ComponentFixture<ManagerNewWorkItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerNewWorkItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerNewWorkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
