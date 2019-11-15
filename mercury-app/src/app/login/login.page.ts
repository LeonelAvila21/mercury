import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { ToastController } from '@ionic/angular';
import { UsersService } from '../services/users.service';
import { user_node } from '../models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  //Global variables
  us : user_node = {
    u_username: "",
    u_password: ""
  };
  
  result : user_node = {
    u_username: "",
    u_password: ""
  };

  constructor(public navCtrl: NavController, public toastController: ToastController, private usersService : UsersService) { }

  ngOnInit() {
  }

  async InicioSesion()
  {
    if (this.us.u_username == "" || this.us.u_password == "")
    {
      const toast = await this.toastController.create({
        message: 'Uno o más campos estan vacíos. Verificar datos.',
        duration: 2000
      });
      toast.present();
      
    }
    else if (this.us.u_username === "admin" && this.us.u_password === "admin")
    {
      this.navCtrl.navigateForward("/home-page/edituser");
    }
    else
    {
      this.usersService.getUser(this.us.u_username).subscribe(
        async res => {
          if (res[0] === undefined)
          {
            const toast = await this.toastController.create({
              message: 'El usuario ingresado no existe.',
              duration: 2000
            });
            toast.present();
          }
          else
          {
            this.result = res[0];
            console.log(this.result.u_password);
            if (this.result.u_password == this.us.u_password)
            {
              this.navCtrl.navigateForward("/home-tabs/inbox/" + this.us.u_username);
            }
            else
            {
              const toast = await this.toastController.create({
                message: 'La contraseña ingresada es incorrecta.',
                duration: 2000
              });
              toast.present();
            }
          }
        },
        err => console.log(err)
      );
    }
  }

}
