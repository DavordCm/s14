import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HorarioComponent } from './horario.component';
import { HorarioEditComponent } from './horario-edit/horario-edit.component'; // Importación del componente de edición
import { HorarioService } from './horario.service';

@NgModule({
  declarations: [
    HorarioComponent,
    HorarioEditComponent, // Declaración del componente de edición
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    HorarioComponent,
    HorarioEditComponent, // Exportación del componente de edición para su uso en otros módulos
  ]
})
export class HorarioModule {
  static forRoot(): ModuleWithProviders<HorarioModule> {
    return {
      ngModule: HorarioModule,
      providers: [HorarioService]
    };
  }
}

// Modelos y interfaces relacionados con 'Horario'

export class Horario {
  id: number;
  dia: string;
  hingreso: string;
  hsalida: string;

  constructor(id: number, dia: string, hingreso: string, hsalida: string) {
    this.id = id;
    this.dia = dia;
    this.hingreso = hingreso;
    this.hsalida = hsalida;
  }
}

export interface HorarioInterface {
  id: number;
  dia: string;
  horaInicio: string;
  horaFin: string;
}

export class HorarioResponse {
  status: string;
  data: Horario[];
  message: string;

  constructor(status: string, data: Horario[], message: string) {
    this.status = status;
    this.data = data;
    this.message = message;
  }
}

export class HorarioRequest {
  dia: string;
  horaInicio: string;
  horaFin: string;

  constructor(dia: string, horaInicio: string, horaFin: string) {
    this.dia = dia;
    this.horaInicio = horaInicio;
    this.horaFin = horaFin;
  }
}
