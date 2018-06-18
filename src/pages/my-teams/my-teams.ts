import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';
import { TeamsPage } from '../teams/teams';

@Component({
    selector: 'page-my-teams',
    templateUrl: 'my-teams.html'
})

export class MyTeamsPage{
    
    constructor(private nav: NavController){

    }

    goToTournaments(){
        this.nav.push(TournamentsPage);
    }

    goToTeams(){
        this.nav.push(TeamsPage);
    }
}