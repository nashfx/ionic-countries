import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
	public code: string;
	country: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
  	this.code = navParams.get("code");
  }

	ionViewDidLoad() {
		this.getCountry();
	}

	getCountry(){
    console.log(this.code);
		this.rest.getByCode(this.code).subscribe((country: any) => {
			this.country = country;
		});
	}

}
