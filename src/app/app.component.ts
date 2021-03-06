import { Component } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AlertModule } from 'ngx-bootstrap';

import * as _ from 'lodash';
import 'rxjs/Rx';
import { element } from 'protractor';
import { AngularFire } from 'angularfire';
import { AngularFireDatabase } from 'angularfire2/database';

import { dailyActivites } from './shared/data/questions/daily-activities.data';
import { Question } from './shared/model/question.model';
import { questionList } from './shared/data/questions-list.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isConnected: any;
  title = 'app';
  questionData: Question;
  questionList: Question[];
  constructor(public afAuth: AngularFireAuth, public afDb: AngularFireDatabase) {
    this.questionData = dailyActivites;
    this.questionList = questionList;
    const observable = afDb.object(`connected`).valueChanges();
    observable
      // .take(1)
      .subscribe(
      next => console.log('next', next),
      error => console.log('error', error),
      () => console.log('Completed')
      );
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }



  lodashConfigTest() {
    _.defaults({ 'a': 1 });
  }
}
