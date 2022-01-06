import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { AlertController } from '@ionic/angular';
const { Storage } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  UsersList=[];
  constructor( private usersService:UsersService, private router:Router, private alertController:AlertController) {

    this.LoadUsers();
  }

  async presentAlert(mesaj) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Hata !',
      message: mesaj,
      buttons: ['Tamam']
    });

    await alert.present();
  }


  LoadUsers()
  {
    this.usersService.getUsers().subscribe((result : any)=>{
      this.UsersList = result.data;
    },err=>{console.log(err); this.presentAlert(err.error.error)})
  }

  async removeItem(item) {
    await Storage.remove({ key: item });
  }

  logout()
  {

    this.removeItem('user_ionichttpAuth');
    this.router.navigateByUrl('/login');

  }

}
