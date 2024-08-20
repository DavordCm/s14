import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  private horarios: Horario[] = []; // Array para almacenar los horarios
  private selectedHorario: Horario | null = null; // Horario seleccionado para edición

  // Método para establecer el horario seleccionado
  setSelectedHorario(horario: Horario) {
    this.selectedHorario = horario;
  }

  // Método para obtener el horario seleccionado
  getSelectedHorario(): Horario | null {
    return this.selectedHorario;
  }

  // Método para actualizar un horario existente
  updateHorario(updatedHorario: Horario) {
    const index = this.horarios.findIndex(h => h.empleadoId === updatedHorario.empleadoId);
    if (index !== -1) {
      this.horarios[index] = updatedHorario;
    }
  }

  // Método para añadir un nuevo horario
  addHorario(horario: Horario) {
    // Verificar si el horario ya existe (puedes ajustar esta lógica según tus necesidades)
    const exists = this.horarios.some(h => h.empleadoId === horario.empleadoId);
    if (!exists) {
      this.horarios.push(horario);
    } else {
      console.error('El horario con el ID de empleado ya existe.');
    }
  }

  // Método para eliminar un horario existente
  deleteHorario(empleadoId: string) {
    this.horarios = this.horarios.filter(h => h.empleadoId !== empleadoId);
  }

  // Método para obtener la lista de horarios
  getHorarios(): Horario[] {
    return this.horarios;
  }
}
