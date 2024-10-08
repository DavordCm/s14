import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-multa',
  standalone: true,
  imports: [CommonModule,MatTableModule],
  templateUrl: './multa.component.html',
  styleUrl: './multa.component.css'
})
export class MultaComponent {
  empleados: any;
displayedColumns: string[] = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
  data: string[] = ['one', 'two', 'three', 'four', 'five']; 


}
