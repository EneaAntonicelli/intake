import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractExtensionTilesComponent } from './contract-extension-tiles.component';

describe('ContractExtensionTilesComponent', () => {
  let component: ContractExtensionTilesComponent;
  let fixture: ComponentFixture<ContractExtensionTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractExtensionTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractExtensionTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
