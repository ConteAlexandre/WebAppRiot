import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationTournoiComponent } from './creation-tournoi.component';

describe('CreationTournoiComponent', () => {
  let component: CreationTournoiComponent;
  let fixture: ComponentFixture<CreationTournoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationTournoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationTournoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
