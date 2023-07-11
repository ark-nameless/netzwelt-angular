import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerritoriesComponent } from './views/territories/territories.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './views/login/login.component';
import { AlreadySignedInGuard } from './guards/already-signed-in.guard';

const routes: Routes = [
  { path: "", component: TerritoriesComponent, canActivate:[AuthGuard] },
  { path: 'account/login', component: LoginComponent, canActivate: [AlreadySignedInGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
