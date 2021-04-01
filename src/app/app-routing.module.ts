import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { TodayComponent } from './today/today.component';


const routes: Routes = [
  {path:'',component:TodayComponent},
  {path:'today',component:TodayComponent},
  {path:'upcoming',component:UpcomingComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
