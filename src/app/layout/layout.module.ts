import { NgModule } from '@angular/core';
import { CoreComponentsModule } from '../core/components/core-components.module';
import { GeneralSharedModule } from '../core/modules/general-shared.module';
import { LayoutComponent } from './layout.component';
import { EmptyLayoutModule } from './layouts/empty/empty.module';
import { VerticalNavLayoutModule } from './layouts/vertical-nav/vertical-nav.module';

const importsExports = [
    // Empty
    EmptyLayoutModule,
    // Custom vertical Layout
    VerticalNavLayoutModule
];


@NgModule({
    declarations: [
        LayoutComponent,
    ],
    imports     : [
        GeneralSharedModule,
        CoreComponentsModule,
        ...importsExports,
    ],
    exports     : [
        LayoutComponent,
        ...importsExports,
    ]
})
export class LayoutModule
{
}
