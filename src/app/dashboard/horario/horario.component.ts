import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HorarioService } from './horario.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

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
  selector: 'app-horario',
  standalone: true,
  templateUrl: './horario.component.html',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {
  showForm = false;
  horarios: Horario[] = []; 
  currentTime!: string;
  nuevoHorarioForm: FormGroup;
  horario!: Horario;

  constructor(private router: Router, private horarioService: HorarioService, private fb: FormBuilder) {
    this.nuevoHorarioForm = this.fb.group({
      empleadoId: ['', Validators.required],
      areaId: ['', Validators.required],
      hingreso: ['', Validators.required],
      hsalida: ['', Validators.required],
      lunes: [false],
      martes: [false],
      miercoles: [false],
      jueves: [false],
      viernes: [false],
      sabado: [false],
      domingo: [false]
    });
  }

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
    this.loadHorarios(); // Cargar la lista de horarios al iniciar
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
  }

  addHorario() {
    if (this.nuevoHorarioForm.valid) {
      const nuevoHorario: Horario = this.nuevoHorarioForm.value;
      this.horarioService.addHorario(nuevoHorario); // Añadir el nuevo horario al servicio
      this.loadHorarios(); // Actualizar la lista de horarios
      this.nuevoHorarioForm.reset({
        lunes: false,
        martes: false,
        miercoles: false,
        jueves: false,
        viernes: false,
        sabado: false,
        domingo: false
      });
      this.showForm = false;
    }
  }

  // Eliminar Horario
  onDelete(horario: Horario) {
    console.log('Eliminando horario:', horario); // Asegúrate de que se llama
    this.horarioService.deleteHorario(horario.empleadoId); // Eliminar el horario del servicio
    this.loadHorarios(); // Actualizar la lista de horarios
  }

  // Editar Horario
  editHorario(horario: Horario) {
    console.log('Editando horario:', horario); // Asegúrate de que se llama
    this.horarioService.setSelectedHorario(horario); // Establecer el horario seleccionado
    this.router.navigate(['/dashboard/horarios-editar', horario.empleadoId]); // Navegar a la página de edición
  } 

  createHorario() {
    this.showForm = true; // Mostrar el formulario para crear un nuevo horario
  }

  onSubmit() {
    if (this.nuevoHorarioForm.valid) {
      this.addHorario(); // Llama a addHorario para agregar el nuevo horario
    }
  }

  onCancel() {
    this.showForm = false; // Oculta el formulario
  }

  // Cargar la lista de horarios desde el servicio
  loadHorarios() {
    this.horarios = this.horarioService.getHorarios();
  }
}
