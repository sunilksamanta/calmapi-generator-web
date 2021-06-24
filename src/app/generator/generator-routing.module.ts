import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrudModuleComponent} from "./crud-module/crud-module.component";

const routes: Routes = [
  {
    path: '',
    component: CrudModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneratorRoutingModule { }
