import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

    login(usuario: String, password: String){
      sessionStorage.setItem("isLogin", "true")
    }
    logout(){
      sessionStorage.clear;
    }
    islogin():boolean{
      return !!sessionStorage.getItem("isLogin")
    }
    
  
}
function login(usuario: any, String: StringConstructor, password: any, String1: StringConstructor) {
  throw new Error('Function not implemented.');
}

