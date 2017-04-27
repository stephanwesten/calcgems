import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator-panel',
  templateUrl: 'calculator-panel.html'
})
export class CalculatorPanelComponent implements OnInit {

  private static readonly DecimalSeparatorAction = "decimalSeparator";
  private numberEnteringState: boolean;
  private display: string;
  // actions are for the calculation, commands for the sheet to avoid confusion between the two
  private calcActionHistory: string[] = [];   // history of actions for current calculations, needed for undo of an expression, first is most recent
  //private sheetCommandHistory = [];   // history of commands in the context of current sheet; clear, delete, recall, etc

  constructor() {}
  ngOnInit() {
    // this.heroService.getHeroes()
    //   .then(heroes => this.heroes = heroes);
  }


  private addActionToCalcHistory(action: string) {
    this.calcActionHistory.push(action);
  }

  touchDecimalSeparator() {
    this.addActionToCalcHistory(CalculatorPanelComponent.DecimalSeparatorAction);
    this.numberEnteringState = true; // needed if someone starts with period char
    // make sure you can only add decimal separator once
    // we always use the period char because js expression can only deal with US locale
    // only when we display a number then we do it localised
    if (!this.calcActionHistory.some( s => s == CalculatorPanelComponent.DecimalSeparatorAction)) {
      this.display = this.display + '.';
    } else {
      // todo: $scope.showErrorShake();
    }
  };

}
