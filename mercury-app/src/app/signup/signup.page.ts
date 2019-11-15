import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { UsersService } from '../services/users.service';
import { user_node } from '../models/users';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  //Global variables
  us : user_node = {
    u_firstname: "",
    u_lastname: "",
    u_email: "",
    u_username: "",
    u_password: ""
  };

  constructor(public navCtrl: NavController, private usersService : UsersService, public toastController: ToastController) { }

  ngOnInit() {
  }

  async registerUser() 
  {
    if (this.us.u_firstname == "" || this.us.u_lastname == "" || this.us.u_email == "" || this.us.u_username == "" || this.us.u_password == "") 
    {
      const toast = await this.toastController.create({
        message: 'Uno o más campos estan vacíos, por favor, verificar.',
        duration: 2000
      });
      toast.present();
    }
    else
    {
      this.usersService.addUser(this.us).subscribe(
        res => console.log(res),
        err => console.log(err)
      );

      this.navCtrl.navigateBack("/"); 
    }
      
  }

}
