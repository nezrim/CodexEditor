import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LandingComponent } from './landing/landing.component';
import { CodexlistComponent } from './codexlist/codexlist.component';
import { CodexDetailsComponent } from './codex-details/codex-details.component';
import { AddcodexComponent } from './addcodex/addcodex.component';
import { ShowJsonComponent } from './show-json/show-json.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'codexlist', component: CodexlistComponent},
  {path: 'codexdetails', component: CodexDetailsComponent},
  {path: 'addcodex', component: AddcodexComponent},
  {path: 'showJSON', component: ShowJsonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
