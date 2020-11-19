import { Component, OnInit } from '@angular/core';
import {AlgoService} from "../services/algo.service";

@Component({
  selector: 'app-list-tournois',
  templateUrl: './list-tournois.component.html',
  styleUrls: ['./list-tournois.component.css']
})
export class ListTournoisComponent implements OnInit {

  listSum = [];

  constructor() {

  }

  ngOnInit(): void {
  }

}
