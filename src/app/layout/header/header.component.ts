import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() public img: string;
  @Input() public red: string;
  @Input() public blue: string;
  @Input() public green: string;
  @Input() public titulo: string;
  fondoAlpha: string;
  constructor() {

  }

  ngOnInit() {
    this.fondoAlpha = 'rgba(' + this.red + ', ' + this.green + ', ' + this.blue + ', 0.521)';
  }

}
