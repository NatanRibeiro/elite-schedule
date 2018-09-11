import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { TeamDetailPage } from '../team-detail/team-detail';
import { TeamHomePage } from '../team-home/team-home';
import { EliteApi } from '../../providers/elite-api/elite-api';
import * as _ from 'lodash';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  private allTeams: any;
  private allTeamDivisions: any;
  public tournament : any = {};
  public teams = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loadingController: LoadingController,
    private eliteApi: EliteApi) {
    this.tournament = navParams.data;
  }

  ionViewDidLoad() {
    let selectedTourney = this.navParams.data;

    let loader = this.loadingController.create({
      content: 'Getting data...'
    });

    loader.present().then(()=> {
      this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data=> {
        this.allTeams = data.teams;
  
        this.allTeamDivisions =
        _.chain(data.teams)
          .groupBy('division')
          .toPairs()
          .map(item=> _.zipObject(['divisionName', 'divisionTeams'], item))
          .value();
  
        this.teams = this.allTeamDivisions;
        console.log('data: ', this.teams);
        loader.dismiss();
      });
    });
  }

  itemTapped($event, team) {
    console.log(team);
    this.navCtrl.push(TeamHomePage, team);
  }
}
