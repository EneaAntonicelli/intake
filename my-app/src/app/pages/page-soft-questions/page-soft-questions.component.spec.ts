import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSoftQuestionsComponent } from './page-soft-questions.component';

describe('PageSoftQuestionsComponent', () => {
  let component: PageSoftQuestionsComponent;
  let fixture: ComponentFixture<PageSoftQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSoftQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSoftQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
