import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HorarioService } from '../horario.service';

interface Horario {
  empleadoId: string;
  areaId: string;
  lunes: boolean;
  martes: boolean;
  miercoles: boolean;
  jueves: boolean;
  viernes: boolean;
  sabado: boolean;
  domingo: boolean;
  hingreso: string;
  hsalida: string;
}

@Component({
  selector: 'app-horario-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './horario-edit.component.html',
  styleUrls: ['./horario-edit.component.css']
})
export class HorarioEditComponent implements OnInit {
  horarioForm: FormGroup = this.fb.group({}); // Inicialización en la declaración


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private horarioService: HorarioService
  ) {}

  ngOnInit(): void {
    const horario = this.horarioService.getSelectedHorario();
    console.log('Horario cargado para editar:', horario);

    this.horarioForm = this.fb.group({
      empleadoId: [horario?.empleadoId || '', Validators.required],
      areaId: [horario?.areaId || '', Validators.required],
      lunes: [horario?.lunes || false],
      martes: [horario?.martes || false],
      miercoles: [horario?.miercoles || false],
      jueves: [horario?.jueves || false],
      viernes: [horario?.viernes || false],
      sabado: [horario?.sabado || false],
      domingo: [horario?.domingo || false],
      hingreso: [horario?.hingreso || '', Validators.required],
      hsalida: [horario?.hsalida || '', Validators.required],
    });
  }

  saveChanges() {
    if (this.horarioForm.valid) {
      const updatedHorario = this.horarioForm.value;
      this.horarioService.updateHorario(updatedHorario);
      this.router.navigate(['/dashboard/horario']); // Redirigir a la lista de horarios después de guardar
    }
  }

  cancel() {
    this.router.navigate(['/dashboard/horario']);
  }
  
  editHorario(horario: Horario) {
    console.log('Editando horario:', horario); // Agregar esta línea para depuración
    this.horarioService.setSelectedHorario(horario);
    this.router.navigate(['/dashboard/horarios-editar', horario.empleadoId]);
  }  
}
