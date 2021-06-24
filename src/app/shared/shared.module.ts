import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";

const imports:any[] = [
  NzLayoutModule,
  NzBreadCrumbModule,
  NzMenuModule,
  NzDropDownModule
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...imports
  ],
  exports: [ ...imports]
})
export class SharedModule { }
