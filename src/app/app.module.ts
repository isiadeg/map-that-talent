import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ConnectComponent } from './connect/connect.component';
import { AboutComponent } from './about/about.component';
import { ChartComponent } from './chart/chart.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ChildComponent } from './child/child.component';
import { AdminComponent } from './admin/admin.component';
import { LoginService } from './login.service';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    ConnectComponent,
    AboutComponent,
    ChartComponent,
    ContactComponent,
    FeedbackComponent,
    ChildComponent,
    AdminComponent,
    UpdatepasswordComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [{provide: LoginService, useClass:LoginService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
