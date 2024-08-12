import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HorarioComponent } from './horario/horario.component';
import { PersonalComponent } from './personal/personal.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProductListaComponent } from './dashboard/product/product-lista/product-lista.component';
import { PostListaComponent } from './dashboard/post/post-lista/post-lista.component';
import { CategoryListaComponent } from './dashboard/category/category-lista/category-lista.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent },
    {path: 'dashboard', component: DashboardComponent,
        children:[
            {path: "home", component: HomeComponent},
            {path: "product", component: ProductListaComponent},
            {path: "category",component: CategoryListaComponent},
            {path: "post", component: PostListaComponent}
        ]
},
    {path: "",redirectTo: "login",pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent}
];
