import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-nasa',
  templateUrl: 'nasa.html',
})
export class NasaPage {
	nasa: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.nasa = navParams.get("nasa");
  }

  ionViewDidLoad() {
  }

}
