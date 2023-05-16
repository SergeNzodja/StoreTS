import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillsComponent } from './grills.component';

describe('GrillsComponent', () => {
  let component: GrillsComponent;
  let fixture: ComponentFixture<GrillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
