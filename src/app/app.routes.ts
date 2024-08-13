import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './dashboard/home/home.component';
import { EmpleadoComponent } from './dashboard/empleado/empleado.component';
import { HorarioComponent } from './dashboard/horario/horario.component';
import { PersonalComponent } from './dashboard/personal/personal.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent },
    {path: 'dashboard', component: DashboardComponent,
        children:[
            {path: "home", component: HomeComponent},
            {path: "personal", component: PersonalComponent},
            {path: "horario",component: HorarioComponent},
            {path: "empleado", component: EmpleadoComponent}
        ]
},
    {path: "",redirectTo: "login",pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent}
];
