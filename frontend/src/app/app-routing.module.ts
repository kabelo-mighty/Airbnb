import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookingComponent } from './user/booking/booking.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RoomComponent } from './user/room/room.component';

const routes: Routes = [{path: 'register', component:RegisterComponent},
{ path: 'login', component: LoginComponent },{path: 'homepage', component: HomepageComponent},
{ path: '', redirectTo: 'homepage', pathMatch: 'full' },
{ path: 'dashboard', component: DashboardComponent },{ path: 'bookings', component: BookingsComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'room', component: RoomComponent },{path: 'profile', component: ProfileComponent },{path: 'booking', component: BookingComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
