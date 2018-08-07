import { HttpClient } from '@angular/common/http';
import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EliteApi {
  private baseUrl = 'https://elite-schedule-5d824.firebaseio.com';

  constructor(public http: Http) {
    console.log('Hello EliteApiProvider Provider');
  }

  getTournaments() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/tournaments.json`).subscribe(res => resolve(res.json()));
    });
  }
}
