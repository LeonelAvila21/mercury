import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  contact = "";

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.contact = this.activatedRoute.snapshot.paramMap.get('username');
  }

  sendMessage(input: string) : void {
    alert(input);
    //metodo enviar mensaje
  }

}
