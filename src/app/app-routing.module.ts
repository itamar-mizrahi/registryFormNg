import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackRegisterScreenComponent } from "../app/track-register-screen/track-register-screen.component";
import { RunScreenComponent } from "../app/run-screen/run-screen.component";
import { HomePageComponent } from "../app/home-page/home-page.component";
import { LoadingScreenComponent } from "../app/loading-screen/loading-screen.component";
import { PreviewComponent } from "../app/preview/preview.component";

const routes: Routes = [
  {path:'track-register', component:TrackRegisterScreenComponent},
  {path:'run', component:RunScreenComponent},
  {path:'home', component:HomePageComponent},
  {path:'', component:LoadingScreenComponent},
  {path:'preview', component:PreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
