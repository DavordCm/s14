// src/app/dashboard/area/area.component.ts
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { AreaDialogComponent } from './area-dialog/area-dialog.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

interface Area {
  id?: number;
  nombre: string;
}

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule
  ]
})
export class AreaComponent implements OnInit {
  displayedColumns: string[] = ['index', 'nombre', 'acciones'];
  areas: MatTableDataSource<Area> = new MatTableDataSource<Area>([]);

  constructor(private apiService: ApiService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadAreas();
  }

  loadAreas(): void {
    this.apiService.getAreas().subscribe(data => {
      this.areas.data = data;
    });
  }

  agregarArea() {
    const dialogRef = this.dialog.open(AreaDialogComponent, {
      width: '250px',
      data: { nombre: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiService.addArea(result).subscribe(() => {
          this.loadAreas(); // Recargar datos
        });
      }
    });
  }

  actualizarArea(area: Area) {
    const dialogRef = this.dialog.open(AreaDialogComponent, {
      width: '250px',
      data: { nombre: area.nombre }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiService.updateArea(area.id!, result).subscribe(() => {
          this.loadAreas(); // Recargar datos
        });
      }
    });
  }

  eliminarArea(area: Area) {
    if (confirm(`¿Estás seguro de que deseas eliminar el área ${area.nombre}?`)) {
      this.apiService.deleteArea(area.id!).subscribe(() => {
        this.loadAreas(); // Recargar datos
      });
    }
  }
}
