import { Component, OnInit } from '@angular/core';
import { Employee, HttpClientService } from '../service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignelse',
  templateUrl: './assignelse.component.html',
  styleUrls: ['./assignelse.component.css']
})
export class AssignelseComponent implements OnInit {

  user=new Employee("","","","");
  constructor(private router: Router, private httpClientService: HttpClientService) { }

  ngOnInit() {
  }

  assignElse(user):void
  {
    this.user=user;
    this.httpClientService.assignElse(this.user);
    alert("Assign Else");
  }

}
