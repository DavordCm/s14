import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonalAddDialogComponent } from './personal-add-dialog/personal-add-dialog.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Personal } from './personal.interface'; 

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule, FormsModule],
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {
  displayedColumns: string[] = [
    'empleado',
    'area',
    'usuario', 
    'contrasena',
    'acciones'
  ];

  personal: Personal[] = []; // Lista de personal

  constructor(public dialog: MatDialog) {}

  CrearPersonal() {
    const dialogRef = this.dialog.open(PersonalAddDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.personal.push(result); // Añadir el nuevo personal a la lista
      }
    });
  }

  actualizarPersonal(personal: Personal) {
    const dialogRef = this.dialog.open(PersonalAddDialogComponent, {
      width: '400px',
      data: { ...personal } // Pasar los datos del personal actual al diálogo
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.personal.findIndex(p => p.email === personal.email);
        if (index !== -1) {
          this.personal[index] = result; // Actualizar el personal en la lista
        }
      }
    });
  }

  eliminarPersonal(personal: Personal) {
    if (confirm(`¿Estás seguro de que deseas eliminar a ${personal.nombre} ${personal.apellidoPaterno}?`)) {
      this.personal = this.personal.filter(p => p !== personal); // Eliminar el personal de la lista
    }
  }
}
