import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingNaccessoriesComponent } from './clothing-naccessories.component';

describe('ClothingNaccessoriesComponent', () => {
  let component: ClothingNaccessoriesComponent;
  let fixture: ComponentFixture<ClothingNaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothingNaccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothingNaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
