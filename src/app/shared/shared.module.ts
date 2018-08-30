import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '@app/shared/layouts/header/header.component';
import { SidebarComponent } from '@app/shared/layouts/sidebar/sidebar.component';
import { CesiumDirective } from './directives/cesium.directive';
import { LoaderComponent } from './loader/loader.component';

import { ApiService, AuthService, GroupService, CesiumService, DeviceService } from './services';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
        ApiService,
        AuthService,
        GroupService,
        CesiumService,
        DeviceService
  ],
  declarations: [
    LoaderComponent,
    CesiumDirective,
    HeaderComponent,
    SidebarComponent
  ], 
  exports: [
    LoaderComponent,
    CesiumDirective,
    HeaderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
