import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomComponent } from './user/room/room.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ProfileComponent } from './user/profile/profile.component';
import { BookingsComponent } from './bookings/bookings.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { FooterComponent } from './user/footer/footer.component';
import { BookingComponent } from './user/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegisterComponent,
    LoginComponent,
    RoomComponent,
    DashboardComponent,
    ProfileComponent,
    BookingsComponent,
    NavbarComponent,
    FooterComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
