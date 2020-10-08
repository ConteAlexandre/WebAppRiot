import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesTeamsComponent } from './mes-teams.component';

describe('MesTeamsComponent', () => {
  let component: MesTeamsComponent;
  let fixture: ComponentFixture<MesTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
