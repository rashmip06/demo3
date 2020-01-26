import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from '../service/schedule.service';
import { HttpClientService, ParcelDetails } from '../service/http-client.service';

@Component({
  selector: 'app-schedulelater',
  templateUrl: './schedulelater.component.html',
  styleUrls: ['./schedulelater.component.css']
})
export class SchedulelaterComponent implements OnInit {

date='1/1/2020'
time='00:00'
user=new ParcelDetails("","","","","","","","","","","");
  constructor(private router: Router, private schedulelaterservice: ScheduleService, private httpClientService: HttpClientService) { }

  ngOnInit() {
    
  }

  scheduleLater(user):void
  {
      this.user=user;
       this.httpClientService.scheduleLater(this.user);
       alert("Scheduled Later");
  };



}
