import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bookstore';
  emittedBookData:any


  getBookData(bookData:any){
      console.log("event clicked", bookData)    
      this.emittedBookData=bookData

  }
}
