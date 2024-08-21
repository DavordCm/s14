import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoAddDialogComponent } from './empleado-add-dialog.component';

describe('EmpleadoAddDialogComponent', () => {
  let component: EmpleadoAddDialogComponent;
  let fixture: ComponentFixture<EmpleadoAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoAddDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpleadoAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
