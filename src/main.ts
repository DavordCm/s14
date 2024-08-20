import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { HorarioEditComponent } from './app/dashboard/horario/horario-edit/horario-edit.component';
import { HorarioComponent } from './app/dashboard/horario/horario.component';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './app/auth/login/login.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { HomeComponent } from './app/dashboard/home/home.component';
import { EmpleadoComponent } from './app/dashboard/empleado/empleado.component';
import { PersonalComponent } from './app/dashboard/personal/personal.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { ComprobanteComponent } from './app/dashboard/comprobante/comprobante.component';
import { UsuarioComponent } from './app/dashboard/usuario/usuario.component';
import { AreaComponent } from './app/dashboard/area/area.component';
import { MultaComponent } from './app/dashboard/multa/multa.component';
import { DepositoComponent } from './app/dashboard/deposito/deposito.component';
import { ControlVehicularComponent } from './app/dashboard/control-vehicular/control-vehicular.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "empleado", component: EmpleadoComponent },
      { path: "horario", component: HorarioComponent },
      { path: 'horarios-editar/:id', component: HorarioEditComponent },  
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

// Configurar el `appConfig`
const appConfig = {
  providers: [
    provideRouter(routes) 
  ],
  bootstrap: [AppComponent] // Aquí defines el componente standalone que inicializará la aplicación
};

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
