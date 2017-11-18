import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarGarageComponent } from './car-garage.component';

describe('CarGarageComponent', () => {
  let component: CarGarageComponent;
  let fixture: ComponentFixture<CarGarageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarGarageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
