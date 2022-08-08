import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AllFoodsService } from './all-foods.service';

import { AppRoutingModule, routingComponets } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    routingComponets
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [AllFoodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
