import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
    selector: 'signup',
    templateUrl: 'signup.html'
})
export class SignupPage {
  
    constructor(public navCtrl: NavController) {
    }

    login() {
        this.navCtrl.push(LoginPage);
    }
}
