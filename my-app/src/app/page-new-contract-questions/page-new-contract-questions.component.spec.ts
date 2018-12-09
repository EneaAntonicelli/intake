import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContractQuestionsComponent } from './new-contract-questions.component';

describe('NewContractQuestionsComponent', () => {
  let component: NewContractQuestionsComponent;
  let fixture: ComponentFixture<NewContractQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewContractQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContractQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
