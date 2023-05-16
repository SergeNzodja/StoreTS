import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistantComponent } from './resistant.component';

describe('ResistantComponent', () => {
  let component: ResistantComponent;
  let fixture: ComponentFixture<ResistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResistantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
