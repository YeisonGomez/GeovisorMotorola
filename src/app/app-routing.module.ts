import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { InvitedModule } from './invited/invited.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
	{ path: 'invited', loadChildren: () => InvitedModule },
    { path: '', loadChildren: () => UserModule },
	{ path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
