import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import { NzFormModule } from 'ng-zorro-antd/form';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzDividerModule} from "ng-zorro-antd/divider";
const imports:any[] = [
  NzLayoutModule,
  NzBreadCrumbModule,
  NzMenuModule,
  NzDropDownModule,
  NzFormModule,
  FormsModule,
  ReactiveFormsModule,
  NzCheckboxModule,
  NzInputModule,
  NzSelectModule,
  NzButtonModule,
  NzCardModule,
  NzDividerModule
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
