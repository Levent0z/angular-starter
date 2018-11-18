import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-links',
  templateUrl: './list-of-links.component.html',
  styleUrls: ['./list-of-links.component.less']
})
export class ListOfLinksComponent implements OnInit {

  constructor() { }

  items = [
    { href: "https://angular.io/tutorial", label: "Tour of Heroes" },
    { href: "https://github.com/angular/angular-cli/wiki", label: "CLI Documentation" },
    { href: "https://blog.angular.io/", label: "Angular blog" }
  ];

  ngOnInit() {
  }

}
