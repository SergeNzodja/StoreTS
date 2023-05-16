import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenNdiningComponent } from './kitchen-ndining.component';

describe('KitchenNdiningComponent', () => {
  let component: KitchenNdiningComponent;
  let fixture: ComponentFixture<KitchenNdiningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenNdiningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenNdiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
