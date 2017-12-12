import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosePatientComponent } from './diagnose-patient.component';

describe('DiagnosePatientComponent', () => {
  let component: DiagnosePatientComponent;
  let fixture: ComponentFixture<DiagnosePatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosePatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
