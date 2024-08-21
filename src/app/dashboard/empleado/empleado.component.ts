import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EmpleadoAddDialogComponent } from './empleado-add-dialog/empleado-add-dialog.component';
import { Empleado } from './empleado.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  displayedColumns: string[] = [
    'nombre',
    'apellidoPaterno',
    'apellidoMaterno',
    'email',
    'telefono',
    'direccion',
    'fechaIngreso',
    'estadoActivo',
    'estadoCivil',
    'nroIdentidad',
    'tipoDocumento',
    'acciones'
  ];

  empleadoDataSource = new MatTableDataSource<Empleado>([]);

  constructor(public dialog: MatDialog) {}

  agregarEmpleado() {
    const dialogRef = this.dialog.open(EmpleadoAddDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.empleadoDataSource.data = [...this.empleadoDataSource.data, result];
      }
    });
  }

  actualizarEmpleado(empleado: Empleado) {
    const dialogRef = this.dialog.open(EmpleadoAddDialogComponent, {
      width: '400px',
      data: { ...empleado }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.empleadoDataSource.data.findIndex(e => e.nroIdentidad === empleado.nroIdentidad);
        if (index !== -1) {
          const updatedData = [...this.empleadoDataSource.data];
          updatedData[index] = result;
          this.empleadoDataSource.data = updatedData;
        }
      }
    });
  }

  eliminarEmpleado(empleado: Empleado) {
    if (confirm(`¿Estás seguro de que deseas eliminar a ${empleado.nombre} ${empleado.apellidoPaterno}?`)) {
      const updatedData = this.empleadoDataSource.data.filter(e => e.nroIdentidad !== empleado.nroIdentidad);
      this.empleadoDataSource.data = updatedData;
      console.log('Empleado eliminado:', empleado);
    }
  }
}
