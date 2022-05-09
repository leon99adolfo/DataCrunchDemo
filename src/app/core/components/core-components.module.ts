import { NgModule } from '@angular/core';
import { SnackBarMsgComponent } from './snack-bar-msg/snack-bar-msg.component';
import { GeneralSharedModule } from '../modules/general-shared.module';

const declarationsExports = [
    SnackBarMsgComponent,
];

@NgModule({
  declarations: [...declarationsExports],
  imports: [GeneralSharedModule],
  exports: [...declarationsExports],
})
export class CoreComponentsModule {}
