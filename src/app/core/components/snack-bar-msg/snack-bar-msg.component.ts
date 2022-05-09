import { Component, OnInit } from '@angular/core';
import { MsgsService } from '../../services/msgs.service';

@Component({
  selector: 'app-snack-bar-msg',
  templateUrl: './snack-bar-msg.component.html'
})
export class SnackBarMsgComponent implements OnInit {

  // variables
  msg: {text: string, icon: string};

  constructor(
    private _msgsService: MsgsService
  ) { 
    this.msg = _msgsService.msg;
  }

  ngOnInit(): void {
  }

}
