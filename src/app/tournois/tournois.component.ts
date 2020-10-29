import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournois',
  templateUrl: './tournois.component.html',
  styleUrls: ['./tournois.component.css']
})
export class TournoisComponent implements OnInit {
  hidden = true;

  constructor() { }

  ngOnInit(): void {
  }

  pressIcon() {
    this.hidden = !this.hidden;
  }
}
