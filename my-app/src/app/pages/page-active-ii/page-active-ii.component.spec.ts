import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActiveIIComponent } from './page-active-ii.component';

describe('PageActiveIIComponent', () => {
  let component: PageActiveIIComponent;
  let fixture: ComponentFixture<PageActiveIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageActiveIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageActiveIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
