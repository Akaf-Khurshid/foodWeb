import { Component, OnInit } from '@angular/core';
import {AllFoodsService} from '../all-foods.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  todayList:any = [];
  totalMacros:any = [];
  totalP:number = 0;
  totalF:number = 0;
  totalC:number = 0;


  constructor(private todayFood:AllFoodsService) { }

  ngOnInit(): void {
    this.todayList = this.todayFood.foodItem;
    this.newSum();
  }

  onClick(index:any)
  {
    this.todayFood.removefromList(index);
    this.totalMacros.splice(0,1);
    this.newSum();
  }

  //a function to update existing sum of macros as well as initialize
  newSum()
  {
    this.totalP = this.todayFood.totalProtein;
    this.totalF = this.todayFood.totalFat;
    this.totalC  = this.todayFood.totalCarbs;
    this.totalMacros = [{"sumProtein": this.totalP, "sumFat" : this.totalF, "sumCarbs" : this.totalC}];
  }

}
