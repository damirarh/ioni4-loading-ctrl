import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private loadingCtrl: LoadingController) {}

  openAndDismiss() {
    this.loadingCtrl.create({message: 'presented'}).then(loader => {
      loader.present().then(() => {
        this.loadingCtrl.create({message: 'created'}).then(() => {
          this.loadingCtrl.getTop().then(topLoader => {
            console.log(topLoader.message); // outputs 'created' instead of 'presented'
            this.loadingCtrl.dismiss().then(dismissed => {
              console.log(dismissed); // doesn't dismiss the open loading overlay and outputs 'false'
            });
          });
        });
      });
    });
  }

}
