import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamsPage } from '../teams/teams';
import { MyTeamsPage} from '../my-teams/my-teams';

/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  public tournaments = [{ id: 1, name: 'Copa do Mundo' }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
  }

  navigate(){
    this.navCtrl.pop();
  }

  goToTeams($event, tournament){
    this.navCtrl.push(TeamsPage, tournament);
  }

  itemTapped(){
    this.navCtrl.push(TeamsPage);
  }
}
