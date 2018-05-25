import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
	public code: string;
	country: any;
	map: GoogleMap;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
  		this.code = navParams.get("code");
  	}

	ionViewDidLoad() {
		this.getCountry();
	}

	getCountry(){
		this.rest.getByCode(this.code).subscribe((country: any) => {
			this.country = country;
			this.loadMap();
		});
	}

	loadMap(){
		let mapOptions: GoogleMapOptions = {
	    	camera: {
	      		target: {
	        		lat: this.country.latlng[0],
	        		lng: this.country.latlng[1]
	      		},
	      		zoom: 18,
	      		tilt: 30
	    	}
  		};

  		this.map = GoogleMaps.create('map_canvas', mapOptions);

  		// Wait the MAP_READY before using any methods.
  		this.map.one(GoogleMapsEvent.MAP_READY)
  			.then(() => {
    			// Now you can use all methods safely.
    			console.log("ready");
  			})
  			.catch(error =>{
    			console.log(error);
  			});
	}



}
