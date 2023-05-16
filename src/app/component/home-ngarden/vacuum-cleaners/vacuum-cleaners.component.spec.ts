import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacuumCleanersComponent } from './vacuum-cleaners.component';

describe('VacuumCleanersComponent', () => {
  let component: VacuumCleanersComponent;
  let fixture: ComponentFixture<VacuumCleanersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacuumCleanersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacuumCleanersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
