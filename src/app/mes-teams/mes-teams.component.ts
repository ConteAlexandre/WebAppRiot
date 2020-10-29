import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mes-teams',
  templateUrl: './mes-teams.component.html',
  styleUrls: ['./mes-teams.component.css']
})
export class MesTeamsComponent implements OnInit {
  team = {
    name: 'MaSuperTeam',
  }
  constructor() { }

  ngOnInit(): void {
  }


}
