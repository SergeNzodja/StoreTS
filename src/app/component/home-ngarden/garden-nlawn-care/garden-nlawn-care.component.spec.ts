import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenNLawnCareComponent } from './garden-nlawn-care.component';

describe('GardenNLawnCareComponent', () => {
  let component: GardenNLawnCareComponent;
  let fixture: ComponentFixture<GardenNLawnCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardenNLawnCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GardenNLawnCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
