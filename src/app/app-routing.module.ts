import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
import { TodayComponent } from './today/today.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  { path: '', component: FoodListComponent},
  { path: 'food', component: FoodListComponent},
  { path: 'today', component: TodayComponent},
  { path: 'chart', component: ChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponets = [FoodListComponent,TodayComponent, ChartComponent];
