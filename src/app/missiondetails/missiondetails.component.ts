import { Component, OnInit } from '@angular/core';
import { StateService } from '../network/stateservice';
import { Router} from '@angular/router';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  mission: any = undefined
  constructor(private router: Router, private stateService: StateService) { }

  ngOnInit(): void {
    this.mission = this.stateService.ejectState();
    console.log(this.mission)
    this.stateService.injectState(undefined);
  }

  goBack(): void {
    this.router.navigate(['/missionlist'])
  }
}
