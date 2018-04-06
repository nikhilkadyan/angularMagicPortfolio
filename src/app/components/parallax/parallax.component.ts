import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {

  @Input() themeData: any;

  constructor() { }

  ngOnInit() {
  }

}
