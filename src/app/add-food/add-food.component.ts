import { Component, OnInit } from '@angular/core';
import { AllFoodsService } from '../all-foods.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  constructor(private foodItem:AllFoodsService) { }

  ngOnInit(): void {
  }

  submitFood(name: string,protein: string,fat: string,carb: string){
    this.foodItem.addToDB({name: name,protein: Number(protein), fat: Number(fat), carb: Number(carb)})
  }

}
