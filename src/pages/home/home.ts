import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { DetailsPage } from './../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	countries: any;
  	errorMessage: string;


  	constructor(public navCtrl: NavController, public rest: RestProvider) {}

  	ionViewDidLoad(){
  		this.getCountries();
  	}

  	getCountries(){
  		this.rest.getCountries().subscribe((countries: any) => {
  			this.countries = countries;
  		});
  	}

  	details(code: string){
  		this.navCtrl.push(DetailsPage, {
  			code: code 
  		});
  	}
}
