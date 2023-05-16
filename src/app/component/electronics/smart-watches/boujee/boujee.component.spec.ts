import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoujeeComponent } from './boujee.component';

describe('BoujeeComponent', () => {
  let component: BoujeeComponent;
  let fixture: ComponentFixture<BoujeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoujeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoujeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
