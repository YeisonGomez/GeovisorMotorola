import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CesiumDirective } from './directives/cesium.directive';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent,
    CesiumDirective
  ],
  exports: [
    LoaderComponent,
    CesiumDirective
  ]
})
export class SharedModule { }
