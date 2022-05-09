import { NgModule } from '@angular/core';
import { GeneralSharedModule } from '../modules/general-shared.module';

const declarationsExports: any[] = [
  
];

@NgModule({
  declarations: [
    ...declarationsExports,
  ],
  imports: [
    GeneralSharedModule
  ],
  exports:[
    ...declarationsExports,
  ]
})
export class CoreDirectivesModule { }
