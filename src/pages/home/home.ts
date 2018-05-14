import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { DetailsPage } from './../details/details';
import { NasaPage } from './../nasa/nasa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	countries: any;
  errorMessage: string;
  nasa: any;

  	constructor(public navCtrl: NavController, public rest: RestProvider) {}

  	ionViewDidLoad(){
      this.getNasaDaily();
  	}

    getNasaDaily(){
      this.rest.getNasaDaily().subscribe((data: any) => {
        this.nasa = data;
        this.getCountries();
      });
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

    nasaDetails(){
      this.navCtrl.push(NasaPage, {
        nasa: this.nasa 
      });
    }
}
