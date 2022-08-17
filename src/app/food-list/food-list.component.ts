import { Component, OnInit } from '@angular/core';
import {AllFoodsService} from '../all-foods.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  public foods:any = [];

  constructor(private foodItem:AllFoodsService) { }

  ngOnInit(): void {
    this.foods = this.foodItem.getFoodData();
  }

  getDetails(foodInfo:any)
  {
    console.log(foodInfo);
    this.foodItem.addToList(foodInfo);
  }

}
