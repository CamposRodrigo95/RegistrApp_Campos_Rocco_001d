import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ing-alumno',
  templateUrl: './ing-alumno.page.html',
  styleUrls: ['./ing-alumno.page.scss'],
})
export class IngAlumnoPage implements OnInit {
  alumno={
    correo:'',
    pass:''
  }

  constructor(private menuController: MenuController,
              private alertController: AlertController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  async Enviar() {
    const alert = await this.alertController.create({
      header: 'Inicio de sesion exitoso!',
      message: 'Proximamente',
      buttons: ['OK'],
    });

    await alert.present();

    this.alumno.correo='';
    this.alumno.pass='';
    


  }
}
