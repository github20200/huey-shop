import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  searchProduct(query: string) {
    console.log("key",query);

  }
}
