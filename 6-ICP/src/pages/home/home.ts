// @ts-ignore
import { Component,viewChild } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {createElementCssSelector} from "@angular/compiler";
// @ts-ignore
import { AboutPage } from '../about/about';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  uname: String;
  password: String;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  signIn() {
    var alert = this.alertCtrl.create({
      title: "Login Success",
      buttons: ['ok']
    });
    alert.present();
  }
  register(){
    this.navCtrl.push(AboutPage);
  }
}
