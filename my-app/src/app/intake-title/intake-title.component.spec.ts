import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeTitleComponent } from './intake-title.component';

describe('IntakeTitleComponent', () => {
  let component: IntakeTitleComponent;
  let fixture: ComponentFixture<IntakeTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntakeTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
