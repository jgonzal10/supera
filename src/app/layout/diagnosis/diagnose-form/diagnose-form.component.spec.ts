import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnoseFormComponent } from './diagnose-form.component';

describe('DiagnoseFormComponent', () => {
  let component: DiagnoseFormComponent;
  let fixture: ComponentFixture<DiagnoseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnoseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnoseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
