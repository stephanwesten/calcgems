import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CalculatorPanelComponent } from '../../components/calculator-panel/calculator-panel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
