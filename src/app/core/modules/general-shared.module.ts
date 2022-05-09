import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MaterialModule } from './material.module';

const importExportModules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgApexchartsModule
];

@NgModule({
    imports: [...importExportModules],
    exports: [...importExportModules],
})
export class GeneralSharedModule {}
