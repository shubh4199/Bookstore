import { Component, OnInit } from '@angular/core';
import { FetchingDataService } from '../fetching-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sideBarData:any;

  constructor(private fetchingDataService: FetchingDataService) { }

  ngOnInit(): void {
    this.fetchingDataService.fetchDataToSidebar().subscribe((data:any)=>{
      this.sideBarData = data.results;
      //console.log(this.sideBarData);
      // for(let data of this.sideBarData){
      //   console.log(data['display_name']);
      //   console.log(data['list_name_encoded'])
      // }
    })
  }

 
}
