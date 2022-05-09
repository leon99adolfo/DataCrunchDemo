import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GeneralSharedModule } from 'src/app/core/modules/general-shared.module';
import { NavigationModule } from '../../navigation/navigation.module';
import { VerticalNavComponent } from './vertical-nav.component';

@NgModule({
    declarations: [
        VerticalNavComponent
    ],
    imports     : [
        RouterModule,
        NavigationModule,
        GeneralSharedModule
    ],
    exports     : [
        VerticalNavComponent
    ]
})
export class VerticalNavLayoutModule
{
}
