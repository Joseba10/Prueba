import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrackserviceProvider } from '../../providers/crackservice/crackservice';
import {CrackimagePage} from '../../pages/crackimage/crackimage';

@IonicPage()
@Component({
  selector: 'page-cracks',
  templateUrl: 'cracks.html',
})
export class CracksPage {

      gamedata:any;

      constructor(public navCtrl: NavController, public navParams: NavParams,private cracksservicio: CrackserviceProvider) {
      }
      
      goToCrackImage(){
      this.navCtrl.push(CrackimagePage);
      }
      ionViewDidLoad() {
        

        this.cracksservicio.getDatos().subscribe(response=>{
          
          let juego:any= this.gamedata=response;
          console.log(juego);
          
        console.log('ionViewDidLoad CracksPage');
          },
        (error)=>{
          console.error(error);
        }
        )

      }
}
