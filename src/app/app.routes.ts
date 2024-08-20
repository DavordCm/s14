import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './dashboard/home/home.component';
import { EmpleadoComponent } from './dashboard/empleado/empleado.component';
import { HorarioComponent } from './dashboard/horario/horario.component';
import { PersonalComponent } from './dashboard/personal/personal.component';
import { MultaComponent } from './dashboard/multa/multa.component';
import { AreaComponent } from './dashboard/area/area.component';
import { DepositoComponent } from './dashboard/deposito/deposito.component';
import { ControlVehicularComponent } from './dashboard/control-vehicular/control-vehicular.component';
import { ComprobanteComponent } from './dashboard/comprobante/comprobante.component';
import { UsuarioComponent } from './dashboard/usuario/usuario.component';
import { HorarioEditComponent } from './dashboard/horario/horario-edit/horario-edit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "empleado", component: EmpleadoComponent },
      { path: "horario", component: HorarioComponent },
      { path: 'horarios-editar/:empleadoid', component: HorarioEditComponent },  
      { path: "personal", component: PersonalComponent },
      { path: "multa", component: MultaComponent },
      { path: "area", component: AreaComponent },
      { path: "deposito", component: DepositoComponent },
      { path: "control", component: ControlVehicularComponent },
      { path: "comprobante", component: ComprobanteComponent },
      { path: "usuario", component: UsuarioComponent }
    ]
  },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export { routes };
