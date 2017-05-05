import { Component, OnInit } from '@angular/core';
import { Expression } from '../../model/expression.ts';
// import { OperatorSAW } from '../../model/operator.ts';

@Component({
  selector: 'calculator-panel',
  templateUrl: 'calculator-panel.html'
})
export class CalculatorPanelComponent implements OnInit {

  private static readonly DecimalSeparatorAction = "decimalSeparator";
  private numberEnteringState: boolean;
  // actions are for the calculation, commands for the sheet to avoid confusion between the two
  private calcActionHistory: string[] = [];   // history of actions for current calculations, needed for undo of an expression, first is most recent
  private expression = new Expression();
  private op : OperatorSAW;

  display: string = '0';

  constructor() {}
  ngOnInit() {
    // this.heroService.getHeroes()
    //   .then(heroes => this.heroes = heroes);
  }

  reset() {
    this.numberEnteringState = false;
    this.display = '0';
    this.calcActionHistory = [];
    this.expression = new Expression();
  }

  private addActionToCalcHistory(action: string) {
    this.calcActionHistory.push(action);
  }

  clickClear() {
    this.reset();
  }

  showErrorShake() {
    // later when ionic defines animations
  };



  clickDecimalSeparator() {
    // make sure you can only add decimal separator once
    if (!this.calcActionHistory.some( s => s == CalculatorPanelComponent.DecimalSeparatorAction)) {
      this.display = this.display + '.';
    } else {
      // todo: $scope.showErrorShake();
    }
    this.addActionToCalcHistory(CalculatorPanelComponent.DecimalSeparatorAction);
    this.numberEnteringState = true; // needed if someone starts with period char
  };

  clickDigit(n: number) {
    this.addActionToCalcHistory('digit');  // zou met enum kunnen
    if (this.numberEnteringState === false) {
      // de eerste keer dat een digit wordt ingetikt
      this.display = '' + n;
      this.numberEnteringState = true;
      // if (this.plusMinusTyped) {
      //   this.operatorStr = '';
      //   this.display = '-' + this.display;
      // }
    } else {
      if (this.display === '0') {
        this.display = '' + n;
      } else {
        this.display = (this.display) + n;
      }
    }
  };

  // binary operator
  clickOperator(operator: OperatorSAW) {
    this.addActionToCalcHistory('operator');
    // we should detect if an intermediate expression has been entered, situations:
    // 1)  getal ingetikt
    // 2)  variable gekozen
    // 3)  meteen een operator gekozen  (er is een vorige calculatie of we moeten de nul tovoegen)
    // 3)  haakje sluiten
    if (this.numberEnteringState
      // || selectedCalc
      // || $scope.currentCalc.expression.length == 0 // meteen een operator invoeren
      // || ($scope.currentCalc.expression.length > 0 && $scope.currentCalc.expression[$scope.currentCalc.expression.length-1]=== ')')
    ) {

      this.expression.add(new Value(+this.display));
      this.expression.add(operator);
    } else {
      // er was al een operator ingetikt, de (nieuwe) operator overschrijft de bestaande
      //this.currentCalc.expression[this.currentCalc.expression.length-1] = operator;
    }
    // state overgang:
    this.display = '0';
    this.numberEnteringState = false;
    // this.operatorStr = operator;
    // this.plusMinusTyped = false;
    // selectedCalc = null;
  };



}
