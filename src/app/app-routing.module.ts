//import { FunctionCall } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {HomeComponent} from './home/home.component';
import {ConnectComponent} from './connect/connect.component';
import { ConnectresolveService } from './connectresolve.service';
import {AboutComponent} from './about/about.component';
import { ChartComponent } from './chart/chart.component';
import {ContactComponent} from './contact/contact.component';
import {FeedbackComponent} from './feedback/feedback.component';


const routes: Routes = [
{
 path:"home", component: HomeComponent,
},
{
  path: 'about', component: AboutComponent

},
{
path: 'connect/:id', component: ConnectComponent, resolve: {connect: ConnectresolveService}
},
{
  path: "chart", component: ChartComponent
},
{
  path: "contact", component: ContactComponent
},
{
  path: "feedback", component: FeedbackComponent
},
{
  path: "", redirectTo: "/home", pathMatch: 'full'
},
{
  path: '**', component: PagenotfoundComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
