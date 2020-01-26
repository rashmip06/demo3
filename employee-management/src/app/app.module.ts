import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchedulelaterComponent } from './schedulelater/schedulelater.component';
import { AssignelseComponent } from './assignelse/assignelse.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DashboardComponent,
    SchedulelaterComponent,
    AssignelseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }