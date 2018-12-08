import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabListDefinitionsComponent } from './tab-list-definitions.component';

describe('TabListDefinitionsComponent', () => {
  let component: TabListDefinitionsComponent;
  let fixture: ComponentFixture<TabListDefinitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabListDefinitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabListDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
