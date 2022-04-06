import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Spacexapi } from '../ApiService/spacexapi.service';


@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  isMission = false
  currentMission: any
  missions: any

  constructor(private spacexApi: Spacexapi, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.spacexApi.sendGetRequest().subscribe(data=>{
      this.missions = data
    })
 
  }


}
