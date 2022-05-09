import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ov-lead-trends',
  templateUrl: './ov-lead-trends.component.html',
  styleUrls: ['./ov-lead-trends.component.scss']
})
export class OvLeadTrendsComponent implements OnInit {

  // variables
  chartLeadTrends: any;
  labels: string[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  series: any[] = [
    {
      name: "2022",
      data: [1800, 900, 2300, 1800, 2000, 3000, 3209, 2500, 2300, 4000, 4500, 4400]
    },
    {
      name: "2021",
      data: [2200, 2100, 3100, 4000, 1200, 1300, 2400, 2600, 1500, 2300, 2000, 1800]
    },
    {
      name: "2020",
      data: [0, 500, 1200, 2000, 800, 750, 700, 1300, 1100, 900, 1300, 1200]
    },
    {
      name: "2019",
      data: [500, 0, 500, 1000, 0, 900, 200, 300, 600, 300, 1000, 400]
    }
  ];
  dataPanel: any = {
    currentMonth: 1873,
    priorMonth: 2309,
    diffPriorMonth: 23,
    priorYear: 1474,
    diffPriorYear: 14,
    rollingAverage:4596
  }

  constructor() { }

  ngOnInit(): void {
    this.processOvLeadTrends();
  }

  processOvLeadTrends() {
    this.chartLeadTrends = {
      chart: { fontFamily: 'inherit', foreColor: 'inherit', height: '100%', type: 'line', toolbar: { show: false } },
      dataLabels: { enabled: false },
      grid: {
        borderColor: 'lightgray',
        xaxis: { lines: { show: true } },
        yaxis: { lines: { show: false } },
      },
      labels: this.labels,
      legend: { show: true, position: 'top' },
      series: this.series,
      states: { hover: { filter: { type: 'darken', value: 0.75 } } },
      stroke: { width: 3 },
      tooltip: { followCursor: true, theme: 'dark' },
      xaxis: {
        axisBorder: { show: false },
        labels: { style: { colors: 'gray' } },
        tooltip: { enabled: false },
      },
      yaxis: {
        title: { text: 'Number of Leads' },
        labels: { offsetX: 0, style: { colors: 'gray' } },
      },
    };
  }

}
