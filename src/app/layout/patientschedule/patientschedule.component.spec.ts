import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineDispenseFormComponent } from './medicinedispense.component';

describe('MedicineDispenseFormComponent', () => {
  let component: MedicineDispenseFormComponent;
  let fixture: ComponentFixture<MedicineDispenseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineDispenseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineDispenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
