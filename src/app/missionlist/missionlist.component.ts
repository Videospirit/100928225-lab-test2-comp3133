import { Component, OnInit } from '@angular/core';
import { DataService } from '../network/data.service';
//import { Mission } from '../models/mission.model';
import { StateService } from '../network/stateservice';
import { Router} from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  //missions: Mission[] = [];
  missions: any = [];
  toggle:boolean = false;

  constructor(private router: Router, private dataService: DataService, private stateService: StateService) { }

  ngOnInit(): void {
    this.dataService.sendGetRequest()
    .subscribe((res: any) => {
      this.missions = res;
  }) 
   
  }

  displayScreen(mission: any): void {
    this.stateService.injectState(mission);
    this.router.navigate(['/missiondetails'])
  }

}
