import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
import { TodayComponent } from './today/today.component';
import { ChartComponent } from './chart/chart.component';
import { AddFoodComponent } from './add-food/add-food.component';

const routes: Routes = [
  { path: '', component: FoodListComponent},
  { path: 'food', component: FoodListComponent},
  { path: 'today', component: TodayComponent},
  { path: 'chart', component: ChartComponent},
  { path: 'foodadd', component: AddFoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponets = [FoodListComponent,TodayComponent, ChartComponent, AddFoodComponent];
