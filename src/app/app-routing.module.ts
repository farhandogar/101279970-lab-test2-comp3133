import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';

const routes: Routes = [
  {path: '', redirectTo: '/mission-list', pathMatch: 'full'},
  {path: 'mission-list', component: MissionlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
