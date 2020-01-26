import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SchedulelaterComponent} from './schedulelater/schedulelater.component'
import {AssignelseComponent} from './assignelse/assignelse.component'

const routes: Routes = [
  { path:'\dashboard', component: DashboardComponent},
  { path: '\schedulelater', component: SchedulelaterComponent},
  { path: '\assignelse' , component:AssignelseComponent },
  { path: '\employees', component: EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
