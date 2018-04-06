import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() themeData: any;
  @Input() public newTheme: Function;

  items= [
    {name: 'Porfolio', link: '#'},
    {name: 'About', link: '/about'}
  ]
  constructor() { }

  ngOnInit() {
  }


}
