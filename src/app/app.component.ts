import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy{
  title = "Bookstore";
  emittedBookData: any;

  // mySubscription:Subscription;

  getBookData(id: any): void {
    // console.log("event clicked", bookData)
    this.emittedBookData = id;
  }

  ngOnInit() {
    // // promise
    // const object = new Promise((resolve) => {
    //   console.log("promise call..");
    //   setTimeout(() => {
    //     resolve("promise working");
    //   }, 1000);
    // });

    // object.then((result) => console.log(result));

    // //observable
    // const observable = new Observable((subscribe) => {
    //   console.log("observable call..");
    //   let counter = 0;
    //   setInterval(() => {
    //     counter += 1;
    //     subscribe.next(counter);
    //   }, 1000);
    // });
    // this.mySubscription = observable.subscribe(result => console.log(result));
    // //   observable
    // //     .pipe(filter((d) => d === "Observable working"))
    // //     .subscribe((result) => console.log(result));
  }

  

  ngOnDestroy() {
    // this.mySubscription.unsubscribe();
  }
}
