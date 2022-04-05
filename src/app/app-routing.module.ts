import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';

//Routing
const routes: Routes = [
  { path: '', redirectTo: 'missionlist', pathMatch: 'full'},
  { path: 'missionlist', component: MissionlistComponent  },
  { path: 'missiondetails', component: MissiondetailsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }