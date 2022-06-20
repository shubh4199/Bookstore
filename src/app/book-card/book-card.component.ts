import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() cardImage:String|undefined;
  @Input() cardTitle:String|undefined;
  @Input() cardAuthor:String|undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
