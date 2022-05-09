import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GeneralSharedModule } from 'src/app/core/modules/general-shared.module';
import { EmptyLayoutComponent } from './empty.component';

@NgModule({
    declarations: [
        EmptyLayoutComponent
    ],
    imports     : [
        RouterModule,
        GeneralSharedModule
    ],
    exports     : [
        EmptyLayoutComponent
    ]
})
export class EmptyLayoutModule
{
}
