import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamDetailPage } from '../team-detail/team-detail';
import { TeamHomePage } from '../team-home/team-home';
import { EliteApi } from '../../providers/elite-api/elite-api';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  public tournament : any = {};
  public teams = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  private eliteApi: EliteApi) {
    this.tournament = navParams.data;
    console.log('**nav param', navParams.data);
  }

  ionViewDidLoad() {
    let selectedTourney = this.navParams.data;
    this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data=> {
      this.teams = data.teams;
    })
  }

  itemTapped($event, team) {
    console.log(team);
    this.navCtrl.push(TeamHomePage, team);
  }
}
