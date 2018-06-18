import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../team-home/team-home';

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  public tournament : any = {};
  public teams = [
    { id: 1, name: 'Brazil' },
    { id: 2, name: 'Russia' },
    { id: 3, name: 'German' },
    { id: 4, name: 'French' },
    { id: 5, name: 'Portugal' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tournament = navParams.data;
    console.log('**nav param', navParams.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }

}
