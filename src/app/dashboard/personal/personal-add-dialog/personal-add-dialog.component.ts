import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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
  newPersonal = {
    empleado: '',
    area: '',
    usuario: '',
    contrasena: ''
  };

  constructor(public dialogRef: MatDialogRef<PersonalAddDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.newPersonal);
  }
}
