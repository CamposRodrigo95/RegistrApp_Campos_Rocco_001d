import { Component } from '@angular/core';

interface Componente{
  name:string;
  icon:string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes : Componente[]=[
    {
      name:'Inicio',
      icon: 'home-outline',
      redirecTo:'/inicio'   
    },   
    {
      name:'Registrarse',
      icon: 'attach-outline',
      redirecTo:'/formulario'   
    },
    {
      name:'Acerca',
      icon:'information-circle-outline',
      redirecTo: '/acerca'
    },   
     

  ]



  constructor() {}
}
