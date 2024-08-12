import { Component } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../angular-material/material/material.module';


@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [MaterialModule,FormsModule,MatCardModule, MatChipsModule, MatProgressBarModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;

}
function signal<T>(arg0: { name: string; completed: boolean; subtasks: { name: string; completed: boolean; }[]; }) {
  throw new Error('Function not implemented.');
}

