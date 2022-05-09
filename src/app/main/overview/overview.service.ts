import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {


  constructor(
    private _apiService: ApiService
  ) { }

  public getLeadTrendsInfo(): Observable<any>{
    return this._apiService.localGet("assets/data/leadTrendsData.json");
  }
}
