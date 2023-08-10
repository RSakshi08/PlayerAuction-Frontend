import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  course= [
    {'id':1,'name':'Create Team','description':'','image':'../../assets/logo1.png','link':'createteam'},
    {'id':2,'name':'Create Player','description':'','image':'../../assets/31202956.jpg','link':'createplayer'},
    {'id':3,'name':'Show Team ','description':'','image':'../../assets/logo1.png','link':'showteam'},
    {'id':4,'name':'Show Player','description':'','image':'../../assets/31202956.jpg','link':'showplayer'},
  ]
}
