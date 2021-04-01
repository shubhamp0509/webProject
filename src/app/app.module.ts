import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { TodayComponent } from './today/today.component';
//import { RouterModule, Routes } from '@angular/router';
import { UpcomingComponent } from './upcoming/upcoming.component';
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'
import {MatTooltipModule} from '@angular/material/tooltip';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {MatInputModule} from '@angular/material/input';
import {NgxPaginationModule} from 'ngx-pagination';
import {ToastrModule} from 'ngx-toastr';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';



// const appRoutes:Routes=[
//   {path:'',component:TodayComponent},
//   {path:'today',component:TodayComponent},
//   {path:'upcoming',component:UpcomingComponent},
  
// ];


@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    UpcomingComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   // RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    Ng2OrderModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
NgxPaginationModule,
ToastrModule.forRoot(
  {
timeOut:1000,
progressBar:true,
progressAnimation:'increasing',
countDuplicates:true,
 preventDuplicates:true,
positionClass:'toast-bottom-center',
tapToDismiss : true 
  })

   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
