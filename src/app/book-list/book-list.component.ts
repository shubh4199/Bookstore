import { Component, OnInit } from '@angular/core';
import { FetchingDataService } from '../fetching-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  booksData:any;
  id:any|undefined|Object;
  constructor(private fetchingDataService: FetchingDataService, private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>{
      this.id=data['id']
      console.log("id if if :",this.id)
      this.fetchingDataService.fetchBooksInBookList(this.id).subscribe((data:any)=>{
        this.booksData=data;
        this.booksData=this.booksData.results['books']; 
        
         console.log(this.booksData)
      })
    })
  }
}

