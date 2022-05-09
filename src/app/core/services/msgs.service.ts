import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarMsgComponent } from '../components/snack-bar-msg/snack-bar-msg.component';

@Injectable({
  providedIn: 'root'
})
export class MsgsService {

  // variables
  msg: {text: string, icon: string};

  // Constructor
  constructor(
    private _matSnackBar: MatSnackBar
  ) { }

  // methods
  error(msg: string, duration: number = 4000){
    this.msg = { text: msg, icon: 'error'};
    this._matSnackBar.openFromComponent(SnackBarMsgComponent, {
      duration: duration,
      horizontalPosition: 'end',
      panelClass: ['bg-warn', 'fg-white']
    });
  }

  success(msg: string, duration: number = 4000){
    this.msg = { text: msg, icon: 'error'};
    this._matSnackBar.openFromComponent(SnackBarMsgComponent, {
      duration: duration,
      horizontalPosition: 'end',
      panelClass: ['bg-blue', 'fg-white']
    });
  }


}
