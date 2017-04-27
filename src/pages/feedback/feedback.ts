import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {

  private emailUrl = 'https://jk3m09hy4g.execute-api.us-east-1.amazonaws.com/prod/mail';
  // states:  waiting, validText, sending, showingResponse (ok | error)  , waiting
  feedback: string;
  showSendButton = false;
  showOkMessage = false;
  showErrorMessage = false;
  showSendingMessage = false;

  constructor(public navCtrl: NavController, private http: Http) {
  }

  processError() {
    this.showSendingMessage = false;
    this.showErrorMessage = true;
    this.hideMessage();
  }

  processResponse() {
    this.showSendingMessage = false;
    this.showOkMessage = true;
    this.hideMessage();
  };

  hideMessage() {
    setTimeout(() => {
      this.showErrorMessage = false;
      this.showOkMessage = false;
      this.showSendingMessage = false;
      this.showSendButton= true;
    }, 2000);
    this.feedback = '';
  };

  doSendFeedback() {
    return this.http.get(this.emailUrl + '?message=' + encodeURIComponent(this.feedback)).toPromise();
  }

  // note: max length is defined in html / textarea
  sendFeedback() {
    this.showSendingMessage = true;
    this.showSendButton = false;
    // Use js instead of Angular's lazy observable to trigger http get
    this.doSendFeedback().then((data)=> this.processResponse(), (err) => this.processError());

  };


}
