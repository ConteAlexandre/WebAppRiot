import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  ListSummoner = [
    'Michelle',
    'Michelle2',
    'Michelle3',
    'Michelle4',
    'Michelle5'
  ];
  ListSelectedTop = [];
  ListSelectedJungle = [];
  ListSelectedMid = [];
  ListSelectedAdc = [];
  ListSelectedSupport = [];

  constructor() { }

  ngOnInit(): void {
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }



}
