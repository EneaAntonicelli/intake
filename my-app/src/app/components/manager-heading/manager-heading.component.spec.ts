import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHeadingComponent } from './manager-heading.component';

describe('ManagerHeadingComponent', () => {
  let component: ManagerHeadingComponent;
  let fixture: ComponentFixture<ManagerHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
