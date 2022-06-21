import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchingDataService {

  baseUrl:any;
  data="Hello"
  subjectNotifier:Subject<any>=new Subject<any>();

  constructor(private http:HttpClient) { }

  fetchDataToSidebar() {
    const baseUrl = "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=4VyAuksSpZSbvy1AjnGdOGtoxsu0zWHY";
    return this.http.get(baseUrl);
  }

  // fetchBooksInBookList(id:any){
  //   const baseUrl=`https://api.nytimes.com/svc/books/v3/lists/current/${id}?api-key=4VyAuksSpZSbvy1AjnGdOGtoxsu0zWHY`;
  //   return this.http.get(baseUrl);
  // }

  fetchBooksInBookList(id:any){
      const baseUrl=`https://api.nytimes.com/svc/books/v3/lists/current/${id}?api-key=4VyAuksSpZSbvy1AjnGdOGtoxsu0zWHY`;
      return this.http.get(baseUrl);
    }

  notifyAboutChange(data:any) {
    let getData;
    this.baseUrl=`https://api.nytimes.com/svc/books/v3/lists/current/${data}?api-key=4VyAuksSpZSbvy1AjnGdOGtoxsu0zWHY`;
    this.http.get(this.baseUrl).subscribe((data:any)=>{
      getData=data.results['books'];
      this.subjectNotifier.next(getData);
    })
  }

}
