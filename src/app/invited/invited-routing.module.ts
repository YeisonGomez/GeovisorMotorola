import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '@app/shared';
import { InvitedComponent } from "./invited.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    {
        path: '', component: InvitedComponent, children: [
            { path: '', component: LoginComponent },
            { path: 'login', component: LoginComponent }
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
        SharedModule,
        NgbModule
    ],
    exports: [RouterModule],
    declarations: [
        LoginComponent,
        InvitedComponent
    ]
})
export class InvitedRoutingModule { }