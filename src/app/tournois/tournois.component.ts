import { Component, OnInit } from '@angular/core';
import {AlgoService} from "../services/algo.service";

@Component({
  selector: 'app-tournois',
  templateUrl: './tournois.component.html',
  styleUrls: ['./tournois.component.css']
})
export class TournoisComponent implements OnInit {
  hidden = true;
  listTeam = [];
  listMatch = [];

  constructor() {
    this.listTeam = AlgoService.createTeamsForTournament(AlgoService.generateListSumMock(64*5),5);
    this.listTeam.sort(function (a, b) {return a.rank - b.rank;}).reverse();
    this.listTeam.forEach((team, index) => {
      team.seed = index+1;
    });
    this.listMatch = AlgoService.algoTournament(this.listTeam);
  }

  ngOnInit(): void {
  }

  pressIcon() {
    this.hidden = !this.hidden;
  }
}
