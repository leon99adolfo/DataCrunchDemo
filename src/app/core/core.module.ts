import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { CoreAnimationsModule } from './animations/core-animations.module';
import { CoreComponentsModule } from './components/core-components.module';
import { CoreDirectivesModule } from './directives/core-directives.module';
import { MaterialModule } from './modules/material.module';


const importsExports = [
    CoreAnimationsModule,
    CoreComponentsModule,
    CoreDirectivesModule,
];

@NgModule({
    declarations: [

    ],
    imports  : [
        MaterialModule,
        ...importsExports,
    ],
    exports: [
        ...importsExports,
    ],
    providers: [
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill'
            }
        },
    ]
})
export class CoreModule
{
    // Constructor
    constructor(
        @Optional() @SkipSelf() parentModule?: CoreModule
    )
    {
        // Do not allow multiple injections
        if ( parentModule )
        {
            throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
        }
    }
}
