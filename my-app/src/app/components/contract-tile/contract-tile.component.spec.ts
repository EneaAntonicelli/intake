import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractTileComponent } from './contract-tile.component';

describe('ContractTileComponent', () => {
  let component: ContractTileComponent;
  let fixture: ComponentFixture<ContractTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
