import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HorarioComponent } from './horario/horario.component';
import { PersonalComponent } from './personal/personal.component';

export const routes: Routes = [
    {path: "empleado", component: EmpleadoComponent},
    {path: "horario", component: HorarioComponent},
    {path: "personal", component: PersonalComponent}
    

];
