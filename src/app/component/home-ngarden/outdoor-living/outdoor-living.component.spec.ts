import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorLivingComponent } from './outdoor-living.component';

describe('OutdoorLivingComponent', () => {
  let component: OutdoorLivingComponent;
  let fixture: ComponentFixture<OutdoorLivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutdoorLivingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutdoorLivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
