import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class HomePage {
  
  usuario="";
  senha="";

  constructor(private http:HttpClient,
              private router:Router,
              public navCtrl: NavController,
              public data: InfoService,
              public toastController: ToastController) {
    }

  login(){
    this.http.get<any[]>("http://localhost/api/login.php?login="+this.usuario+"&senha="+this.senha)
    .subscribe( dados => {
      if (dados.length > 0) {
          console.log(dados);
          this.data.logado = dados[0].user_id;
          this.data.usuario = dados[0].name;
          this.presentToast("Bem-vindo " + this.data.usuario);
          this.router.navigate(['/feed']);
          

      }      
      })
  }

  async presentToast(mens) {
    const toast = await this.toastController.create({
      message: mens,
      duration: 2000
    });
    toast.present();
  }

}
