import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchingDataService {

  baseUrl:any;

  constructor(private http:HttpClient) { }

  fetchDataToSidebar() {
    const baseUrl = "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=4VyAuksSpZSbvy1AjnGdOGtoxsu0zWHY";
    return this.http.get(baseUrl);
  }

  
}
