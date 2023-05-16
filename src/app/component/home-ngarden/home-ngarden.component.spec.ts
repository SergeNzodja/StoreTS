import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNgardenComponent } from './home-ngarden.component';

describe('HomeNgardenComponent', () => {
  let component: HomeNgardenComponent;
  let fixture: ComponentFixture<HomeNgardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNgardenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeNgardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
