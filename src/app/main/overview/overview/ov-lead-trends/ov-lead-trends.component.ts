import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { OverviewService } from '../../overview.service';

@Component({
  selector: 'app-ov-lead-trends',
  templateUrl: './ov-lead-trends.component.html',
  styleUrls: ['./ov-lead-trends.component.scss']
})
export class OvLeadTrendsComponent implements OnInit, OnDestroy {

  private _unsubscribeAll: Subject<any> = new Subject<any>();
  // variables
  chartLeadTrends: any;
  labels: string[];
  series: any[];
  dataPanel: any;

  // Constructor
  constructor(
    private _overviewService: OverviewService
  ) { }


  // Events
  ngOnInit(): void {
    this._overviewService.getLeadTrendsInfo().pipe(takeUntil(this._unsubscribeAll)).subscribe(r => {
      this.labels = r.labels;
      this.series = r.series;
      this.dataPanel = r.dataPanel;
      this.processOvLeadTrends();
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next('');
    this._unsubscribeAll.complete();
  }

  // methdos
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
