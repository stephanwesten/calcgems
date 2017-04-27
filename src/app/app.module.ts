import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CalcGemsApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FeedbackPage } from "../pages/feedback/feedback";

import { CalculatorPanelComponent } from "../components/calculator-panel/calculator-panel";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// JsonpModule probably later on needed
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    CalcGemsApp,
    AboutPage,
    ContactPage,
    FeedbackPage,
    HomePage,
    TabsPage,
    CalculatorPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(CalcGemsApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CalcGemsApp,
    AboutPage,
    ContactPage,
    FeedbackPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
