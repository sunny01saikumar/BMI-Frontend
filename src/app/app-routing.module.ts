import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './bmi/bmi.component';
import { PiechartComponent } from './piechrt/piechart/piechart.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AboutBmiComponent } from './about-bmi/about-bmi.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

const routes: Routes = [
  
  {path:'', component:DashboardComponent,children: [
    {path:'', component:BmiComponent},
    {path:'bmichart', component:PiechartComponent},
    {path:'about',component:AboutBmiComponent},
    {path:'myprofile',component:MyprofileComponent},
  ]
    },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
