import { TestBed, ComponentFixture, async } from '@angular/core/testing';
//import { By } from '@angular/platform-browser';
//import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CalcGemsApp } from '../../app/app.component';
import { CalculatorPanelComponent } from './calculator-panel';
//import { beforeEach } from 'jasmine';
// import { afterEach } from 'jasmine';
//import {it, describe, beforeEach, inject, expect} from "angular2/testing";


let calculatorPanel: CalculatorPanelComponent;
let fixture: ComponentFixture<CalculatorPanelComponent>;
// let de: DebugElement;
// let el: HTMLElement;


describe('Comp: CalculatorPanelComponent', () => {

    beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [CalcGemsApp, CalculatorPanelComponent],

      providers: [

      ],

      imports: [
        IonicModule.forRoot(CalcGemsApp)
      ]

    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorPanelComponent);
    calculatorPanel    = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
    calculatorPanel = null;
  });

  it('is created', () => {
    expect(fixture).toBeTruthy();
    expect(calculatorPanel).toBeTruthy();
  });

  it('click decimal separator', () => {
    expect(calculatorPanel.display).toEqual('0');
    calculatorPanel.clickDecimalSeparator();
    expect(calculatorPanel.display).toEqual('0.');
    // another time should have no effect or (todo) raise an error
    calculatorPanel.clickDecimalSeparator();
    expect(calculatorPanel.display).toEqual('0.');
  });

  it('click digit', () => {
    expect(calculatorPanel.display).toEqual('0');
    calculatorPanel.clickDigit(2);
    expect(calculatorPanel.display).toEqual('2');
    calculatorPanel.clickDigit(3);
    expect(calculatorPanel.display).toEqual('23');
  });

  it('click decimal separator and digit', () => {
    expect(calculatorPanel.display).toEqual('0');
    calculatorPanel.clickDecimalSeparator();
    expect(calculatorPanel.display).toEqual('0.');
    calculatorPanel.clickDigit(2);
    expect(calculatorPanel.display).toEqual('0.2');
    calculatorPanel.clickDigit(9);
    expect(calculatorPanel.display).toEqual('0.29');

    // test scenario starting with a digit
    calculatorPanel.reset();
    expect(calculatorPanel.display).toEqual('0');
    calculatorPanel.clickDigit(2);
    calculatorPanel.clickDecimalSeparator();
    expect(calculatorPanel.display).toEqual('2.');
    calculatorPanel.clickDigit(9);
    expect(calculatorPanel.display).toEqual('2.9');
  });




  // it('can set the title to a supplied value', () => {
  //
  //   de = fixture.debugElement.query(By.css('ion-title'));
  //   el = de.nativeElement;
  //
  //   comp.changeTitle('Your Page');
  //   fixture.detectChanges();
  //   expect(comp['title']).toEqual('Your Page');
  //   expect(el.textContent).toContain('Your Page');
  //
  // });

});
