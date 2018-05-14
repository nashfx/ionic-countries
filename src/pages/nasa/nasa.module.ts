import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NasaPage } from './nasa';

@NgModule({
  declarations: [
    NasaPage,
  ],
  imports: [
    IonicPageModule.forChild(NasaPage),
  ],
})
export class NasaPageModule {}
