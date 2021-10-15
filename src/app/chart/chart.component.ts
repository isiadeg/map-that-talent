import { Component, OnInit } from '@angular/core';

import {
  Chart,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  
  Tooltip,
  
} from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let ctx = document.getElementsByTagName('canvas')[0];

          var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    
  }]
}
          })

    
  }

}
