import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@app/shared';
import { HeaderComponent } from '@app/shared/layouts/header/header.component';
import { SidebarComponent } from '@app/shared/layouts/sidebar/sidebar.component';
import { UserComponent } from "./user.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {
        path: '', component: UserComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        TranslateModule.forRoot(),
        SharedModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        UserComponent,
        HomeComponent
    ],
    entryComponents: [
        UserComponent
    ]
})
export class UserRoutingModule { }