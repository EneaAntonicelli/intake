import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActiveIIIComponent } from './page-active-iii.component';

describe('PageActiveIIIComponent', () => {
  let component: PageActiveIIIComponent;
  let fixture: ComponentFixture<PageActiveIIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageActiveIIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageActiveIIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
