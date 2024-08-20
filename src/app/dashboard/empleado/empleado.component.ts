import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [CommonModule,MatTableModule,MatIconModule ],
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  displayedColumns: string[] = ['nombre', 'apellidoPaterno', 'apellidoMaterno', 'email', 'telefono', 'direccion', 'fechaIngreso', 'estadoActivo', 'estadoCivil', 'nroIdentidad', 'tipoDocumento', 'acciones'];
  empleado = [
    {
      nombre: ' ',
      apellidoPaterno: ' ',
      apellidoMaterno: ' ',
      email: ' ',
      telefono: ' ',
      direccion: ' ',
      fechaIngreso: new Date(),
      estadoActivo: false,
      estadoCivil: ' ',
      nroIdentidad: ' ',
      tipoDocumento: ' '
    },
  ];
  actualizarEmpleado(empleado: any) {
    console.log('Actualizar empleado:', empleado);
  }
  eliminarEmpleado(empleado: any) {
    console.log('Eliminar empleado:', empleado);
  }
}

