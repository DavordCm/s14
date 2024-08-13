import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';
import { AuthService } from '../auth/auth.service';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  constructor(private router : Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ){

  }
  irHome(){
    this.router.navigate(["home"],{relativeTo:this.route})
  }
  irEmpleado(){
    this.router.navigate(["empleado"],{relativeTo:this.route})
  }
  irHorario(){
    this.router.navigate(["horario"],{relativeTo:this.route})
  }
  irPersonal(){
    this.router.navigate(["personal"],{relativeTo:this.route})
  }
  irMulta(){
  this.router.navigate(["multa"],{relativeTo:this.route})
  }
  irArea(){
    this.router.navigate(["area"],{relativeTo:this.route})
  }
  irDeposito(){
    this.router.navigate(["deposito"],{relativeTo:this.route})
  }
  irControl(){
    this.router.navigate(["control"],{relativeTo:this.route})
  }
  irComprobante(){
    this.router.navigate(["comprobante"],{relativeTo:this.route})
  }
  irUsuario(){
    this.router.navigate(["usuario"],{relativeTo:this.route})
  }
  

  Salir(){
    this.authService.logout()
    this.router.navigateByUrl("/login", {replaceUrl:true});
  }
  

}
