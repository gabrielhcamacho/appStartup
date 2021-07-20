import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FeedPage } from '../feed/feed.page';
import { HomePage } from '../LoginPage/login.page';
import { InfoService } from '../info.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage{

  username = "";
  name = "";
  password = "";
  repassword = "";

  constructor(private http:HttpClient, 
              private router:Router, 
              public data: InfoService,
              public toastController: ToastController) {
   }

  register(){
    if (this.password == this.repassword){
      this.http.get<any[]>("http://localhost/api/register.php?user="+this.username+"&pass="+this.password+"&name="+this.name)
      .subscribe()
      this.presentToast("Usuário cadastrado com sucesso");
      this.router.navigate(['home']);
      
    } else{
      this.presentToast("Password e Confirm Password devem ser os mesmos!")
    }

  }

  async presentToast(mens) {
    const toast = await this.toastController.create({
      message: mens,
      duration: 2000
    });
    toast.present();
  }

}
