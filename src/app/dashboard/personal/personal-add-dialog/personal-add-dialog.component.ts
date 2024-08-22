import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-add-dialog',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './personal-add-dialog.component.html',
  styleUrls: ['./personal-add-dialog.component.css']
})
export class PersonalAddDialogComponent {
  newPersonal: any;

  constructor(
    public dialogRef: MatDialogRef<PersonalAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Inicializar con los datos si están disponibles, si no, crear uno vacío
    this.newPersonal = data || {
      empleado: '',
      area: '',
      usuario: '',
      contrasena: ''
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    // Validación para asegurarse de que todos los campos requeridos estén completos
    if (this.newPersonal.empleado && this.newPersonal.area && this.newPersonal.usuario && this.newPersonal.contrasena) {
      this.dialogRef.close(this.newPersonal);
    } else {
      // Aquí podrías mostrar un mensaje de error si algún campo falta
      alert('Por favor, completa todos los campos.');
    }
  }
}
