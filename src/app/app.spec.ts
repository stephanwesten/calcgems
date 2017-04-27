import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { CalcGemsApp } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from "../pages/tabs/tabs";

let comp: CalcGemsApp;
let fixture: ComponentFixture<CalcGemsApp>;

describe('Component: Root Component', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [CalcGemsApp],

      providers: [
        StatusBar,
        SplashScreen
      ],

      imports: [
        BrowserModule,
        IonicModule.forRoot(CalcGemsApp)
      ]

    }).compileComponents();

  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(CalcGemsApp);
    comp    = fixture.componentInstance;

  });

  afterEach(() => {
    fixture.destroy();
    comp = null;
  });

  it('is created', () => {

    expect(fixture).toBeTruthy();
    expect(comp).toBeTruthy();

  });

  it('initialises with a root page of HomePage', () => {
    expect(comp['rootPage']).toBe(TabsPage);
  });

});
