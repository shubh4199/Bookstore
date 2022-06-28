import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { FetchingDataService } from '../fetching-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy, OnChanges {
  // booksData:any;
  id:any|undefined|Object;
  bookData:any
  favoriteBookList=<Array<any>>[]

  @Input() booksId:any|undefined;

  // notifierSubscription:Subscription=this.fetchingDataService.subjectNotifier.subscribe(data=>{
  //   this.myData = data;
  // })

  constructor(private fetchingDataService: FetchingDataService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchingDataService.byDefaultFavBookId().subscribe((favBookId:any)=>{
      for(let i of favBookId.favBooksId){
       this.favoriteBookList.push(i.favBookId)
    }})
  }
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

  ngOnChanges(changes: SimpleChanges): void {
    if(!this.booksId){
      return
    }
    this.fetchingDataService.fetchBooksInBookList(this.booksId).subscribe((booksData:any)=>{
            this.bookData=booksData.results['books']; 
          })
  }

  ngOnDestroy(): void {
    // this.notifierSubscription.unsubscribe();
  }

  myFavoriteBookList(favBookId:any){
    if(this.favoriteBookList.includes(favBookId)) {

      const index=this.favoriteBookList.findIndex(favBookId=>favBookId===favBookId)

          this.favoriteBookList.splice(index,1)
          console.log("List :",this.favoriteBookList)
      return
    }
    this.favoriteBookList.push(favBookId)
    console.log("List :",this.favoriteBookList)
  }

  }


