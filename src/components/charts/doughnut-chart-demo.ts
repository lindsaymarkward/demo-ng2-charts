import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';



@Component({
  moduleId: module.id,
  selector: 'doughnut-chart-demo',
  templateUrl: './doughnut-chart-demo.html',
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class DoughnutChartDemoComponent {
  // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
