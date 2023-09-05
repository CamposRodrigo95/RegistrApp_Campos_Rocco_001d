import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ing-docente',
  templateUrl: './ing-docente.page.html',
  styleUrls: ['./ing-docente.page.scss'],
})
export class IngDocentePage implements OnInit {
  docente={
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

    this.docente.correo='';
    this.docente.pass='';
    


  }
}
