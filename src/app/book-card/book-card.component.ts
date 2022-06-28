import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FetchingDataService } from '../fetching-data.service';


@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  isFavorite=true;

  @Input() cardImage:String|undefined;
  @Input() cardTitle:String|undefined;
  @Input() cardAuthor:String|undefined;
  @Input() cardBookCover:String|undefined;
  @Input() cardItemPrice:String|undefined;
  @Input() cardFavoriteId:string|undefined;
  @Output() emitCardFavId =new EventEmitter();

  constructor(private fetchDataService:FetchingDataService) { }

  ngOnInit(): void {
    this.fetchDataService.byDefaultFavBookId().subscribe((favBookId:any)=>{
      for(let i of favBookId.favBooksId){
        if(this.cardFavoriteId===i.favBookId)
          this.isFavorite = false;
      }
    })
  }

  makeFavorite(primaryId:any) {
    
    

    this.isFavorite = !this.isFavorite;
    this.emitCardFavId.emit(primaryId);
  }

}