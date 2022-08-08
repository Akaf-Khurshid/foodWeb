import { Injectable } from '@angular/core';


interface Food{
  name: string;
  protein: number;
  fat: number;
  carb: number;
}

@Injectable({
  providedIn: 'root'
})

export class AllFoodsService {

  constructor() { }

  foodItem: Food[] = [];

  totalProtein: number = 0;
  totalFat: number = 0;
  totalCarbs: number = 0;

  addToList(food: Food) {
    this.foodItem.push(food);
    //increment total macros
    this.totalProtein = this.totalProtein + food.protein;
    this.totalFat = this.totalFat + food.fat;
    this.totalCarbs = this.totalCarbs + food.carb;
  }

  removefromList(index: any){
    //decrement total macros
    this.totalProtein = this.totalProtein - this.foodItem[index].protein;
    this.totalFat = this.totalFat - this.foodItem[index].fat;
    this.totalCarbs = this.totalCarbs - this.foodItem[index].carb;
    this.foodItem.splice(index,1);
  }

  getFoodData()
  {
    return [
      {"foodItem": "Banana", "protein": 1, "fat": 0, "carb": 28},
      {"foodItem": "Hamburger", "protein": 24, "fat": 28, "carb": 45},
      {"foodItem": "Chicken Breast", "protein": 53, "fat": 6, "carb": 1},
      {"foodItem": "Apple", "protein": 1, "fat": 0, "carb": 25},
      {"foodItem": "Fried Chicken", "protein": 14, "fat": 25, "carb": 7},
      {"foodItem": "Ramen Noodles", "protein": 5, "fat": 7, "carb": 27},
      {"foodItem": "Chicken Shawarma", "protein": 45, "fat": 17, "carb": 46},
      {"foodItem": "Kebab", "protein": 47, "fat": 39, "carb": 43},
      {"foodItem": "Beef Pho", "protein": 20, "fat": 5, "carb": 100},
      {"foodItem": "Beef Kofta", "protein": 26, "fat": 12, "carb": 2}
    ];
  }

}