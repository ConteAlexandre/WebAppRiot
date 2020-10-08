import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MesTeamsComponent } from './mes-teams/mes-teams.component';
import { TeamComponent } from './mes-teams/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    MesTeamsComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
