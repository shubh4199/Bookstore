import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FetchingDataService } from '../fetching-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sideBarData:any;
  @Output() onSidenavLinkClicked = new EventEmitter();
  bookData:any

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

  getData(data:any){
    console.log("Event data:",data)
    this.fetchingDataService.notifyAboutChange(data);
  }

  onSideBarLinkClicked(id :any){

    console.log("inside sidenav components",id)
    // this.fetchingDataService.fetchBooksInBookList(id).subscribe((data:any)=>{
    //   console.log(data)
    //   this.bookData=data.results['books']
    //   this.isSidenavLinkClicked.emit(this.bookData)
    // })
    this.onSidenavLinkClicked.emit(id)
  }

 
}
