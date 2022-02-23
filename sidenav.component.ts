import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
buttonDisabled:boolean=false;
  name:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
