import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  active_user = "";

  contacts = [
    {
      name: '  Patricio Estrella',
      last_chat: 'Estas dormido?!',
      avatar: 'http://wallpaperswide.com/download/patrick_star-wallpaper-640x480.jpg'
    },
    {
      name: '  Bob Esponja',
      last_chat: 'Quiero Kangreburgers!!',
      avatar: 'https://images7.alphacoders.com/914/914659.jpg'
    },
    {
      name: '  Calamardo',
      last_chat: 'Envidio tu vida.. xD',
      avatar: 'https://res.cloudinary.com/teepublic/image/private/s--CCKksGhd--/t_Preview/b_rgb:c8e0ec,c_limit,f_jpg,h_630,q_90,w_630/v1543593628/production/designs/3618627_0.jpg'
    }
  ]
  
  constructor(public navCtrl: NavController, private activatedRoute: ActivatedRoute) { }

  OpenMessage(i:number): void {
    this.navCtrl.navigateForward("/message/" + this.contacts[i].name);
  }
  

  ngOnInit() {
    this.active_user = this.activatedRoute.snapshot.paramMap.get('active_user');
  }

}
