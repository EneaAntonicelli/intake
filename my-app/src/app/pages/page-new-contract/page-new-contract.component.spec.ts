import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewContractComponent } from './page-new-contract.component';

describe('PageNewContractComponent', () => {
  let component: PageNewContractComponent;
  let fixture: ComponentFixture<PageNewContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNewContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
