import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrackserviceProvider } from '../../providers/crackservice/crackservice';

@IonicPage()
@Component({
  selector: 'page-crackimage',
  templateUrl: 'crackimage.html',
})
export class CrackimagePage {

  gamedata:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private cracksservicio: CrackserviceProvider) {
  }

  ionViewDidLoad() {

    this.cracksservicio.getDatos().subscribe((juego:any)=>{
      this.gamedata=juego;
      console.log(juego);
      
    console.log('ionViewDidLoad CracksPage');
    },
    (error)=>{
      console.error(error);
    });

  }



}
