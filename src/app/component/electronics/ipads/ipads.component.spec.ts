import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadsComponent } from './ipads.component';

describe('IpadsComponent', () => {
  let component: IpadsComponent;
  let fixture: ComponentFixture<IpadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
