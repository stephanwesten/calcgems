import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator-panel',
  templateUrl: 'calculator-panel.html'
})
export class CalculatorPanelComponent implements OnInit {

  private static readonly DecimalSeparatorAction = "decimalSeparator";
  private numberEnteringState: boolean;
  display: string = '';
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
    // make sure you can only add decimal separator once
    if (!this.calcActionHistory.some( s => s == CalculatorPanelComponent.DecimalSeparatorAction)) {
      this.display = this.display + '.';
    } else {
      // todo: $scope.showErrorShake();
    }
    this.addActionToCalcHistory(CalculatorPanelComponent.DecimalSeparatorAction);
    this.numberEnteringState = true; // needed if someone starts with period char
  };

}
