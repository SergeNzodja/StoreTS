import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FansNairConditioningComponent } from './fans-nair-conditioning.component';

describe('FansNairConditioningComponent', () => {
  let component: FansNairConditioningComponent;
  let fixture: ComponentFixture<FansNairConditioningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FansNairConditioningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FansNairConditioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
