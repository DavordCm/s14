import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';  // Importa también el módulo de fechas nativas
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-empleado-add-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './empleado-add-dialog.component.html',
  styleUrls: ['./empleado-add-dialog.component.css']
})
export class EmpleadoAddDialogComponent {
  empleadoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EmpleadoAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.empleadoForm = this.fb.group({
      nombre: [data?.nombre || '', Validators.required],
      apellidoPaterno: [data?.apellidoPaterno || '', Validators.required],
      apellidoMaterno: [data?.apellidoMaterno || '', Validators.required],
      email: [data?.email || '', [Validators.required, Validators.email]],
      telefono: [data?.telefono || '', Validators.required],
      direccion: [data?.direccion || '', Validators.required],
      fechaIngreso: [data?.fechaIngreso || new Date(), Validators.required],
      estadoActivo: [data?.estadoActivo || true],
      estadoCivil: [data?.estadoCivil || 'Soltero'],
      nroIdentidad: [data?.nroIdentidad || '', Validators.required],
      tipoDocumento: [data?.tipoDocumento || '', Validators.required]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.empleadoForm.valid) {
      this.dialogRef.close(this.empleadoForm.value);
    }
  }
}
