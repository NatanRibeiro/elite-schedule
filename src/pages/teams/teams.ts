import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamDetailPage } from '../team-detail/team-detail';
import { TeamHomePage } from '../team-home/team-home';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  public tournament : any = {};
  public teams = [
    { id: 1, name: 'HC Elite' },
    { id: 2, name: 'Team Takeover' },
    { id: 3, name: 'DC Thunder' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tournament = navParams.data;
    console.log('**nav param', navParams.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  itemTapped($event, team) {
    console.log(team);
    this.navCtrl.push(TeamHomePage, team);
  }
}
