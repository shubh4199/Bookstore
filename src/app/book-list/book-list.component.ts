import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FetchingDataService } from '../fetching-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  // booksData:any;
  id:any|undefined|Object;
  myData:any

  @Input() booksData:any;

  notifierSubscription:Subscription=this.fetchingDataService.subjectNotifier.subscribe(data=>{
    this.myData = data;
  })

  constructor(private fetchingDataService: FetchingDataService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {}
  // ngOnInit(): void {
  //   this.activatedRoute.params.subscribe(data=>{
  //     this.id=data['id']
  //     console.log("id if if :",this.id)
  //     this.fetchingDataService.fetchBooksInBookList(this.id).subscribe((data:any)=>{
  //       this.booksData=data;
  //       this.booksData=this.booksData.results['books']; 
        
  //        console.log(this.booksData)
  //     })
  //   })
  // }

  ngOnDestroy(): void {
    this.notifierSubscription.unsubscribe();
  }
}

