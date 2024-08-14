import { Component,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-horario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {
horarios: any;
  currentTime!: string;

  constructor() { }

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000); // Actualiza la hora cada segundo
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString(); 
  }


}
