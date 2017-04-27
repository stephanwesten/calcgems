import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CalcGemsApp } from '../../app/app.component';
import { CalculatorPanelComponent } from './calculator-panel';

let calculatorPanel: CalculatorPanelComponent;
let fixture: ComponentFixture<CalculatorPanelComponent>;
let de: DebugElement;
let el: HTMLElement;

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
    de = null;
    el = null;
  });

  it('is created', () => {
    expect(fixture).toBeTruthy();
    expect(calculatorPanel).toBeTruthy();
  });

  it('initialises with a title of My Page', () => {
    calculatorPanel.touchDecimalSeparator();
    expect(calculatorPanel.display).toEqual('.');
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
