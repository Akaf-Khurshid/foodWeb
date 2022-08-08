import { Component, ViewChild } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { AllFoodsService } from 'src/app/all-foods.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  data: any = [];

  constructor(private foodItem: AllFoodsService) { }
  ngOnInit(): void {
    this.data = [];
    this.data = [this.foodItem.totalCarbs, this.foodItem.totalFat, this.foodItem.totalProtein]
    this.pieChartData.datasets[0].data = this.data;
    this.chart?.update();
  }
  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      title: {display: true, 
        text: 'Total Daily Macros', 
        font: {weight: 'bold', size: 20}},
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [['Carb'], ['Fat'], 'Protein'],
    datasets: [{
      data: [0, 0, 0]
    }]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [DatalabelsPlugin];

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}