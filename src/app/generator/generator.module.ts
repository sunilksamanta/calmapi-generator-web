import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneratorRoutingModule } from './generator-routing.module';
import { CrudModuleComponent } from './crud-module/crud-module.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    CrudModuleComponent
  ],
  imports: [
    CommonModule,
    GeneratorRoutingModule,
    SharedModule
  ]
})
export class GeneratorModule { }
