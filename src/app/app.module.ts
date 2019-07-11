import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';
import { Angular4PaystackModule } from 'angular4-paystack';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './account/signup/signup.component';
import { LoginComponent } from './account/login/login.component';
// import { DashboardComponent } from './user-layout/dashboard/dashboard.component';
// import { ManageWalletComponent } from './user-layout/manage-wallet/manage-wallet.component';
// import { PayBillsComponent } from './user-layout/pay-bills/pay-bills.component';
// import { ProfileComponent } from './user-layout/profile/profile.component';
// import { ChangePasswordComponent } from './user-layout/change-password/change-password.component';
import {AuthGuard} from './auth/auth.guard';
import {UserAuthService} from './auth/user-auth.service';
import { BillService } from './transactions/bill.service';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { HelpComponent } from './user-layout/help/help.component';
// import { HistoryComponent } from './user-layout/history/history.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminlayoutComponent } from './admin/adminlayout/adminlayout.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { PaymentComponent } from './admin/payment/payment.component';
import { AdminhistoryComponent } from './admin/adminhistory/adminhistory.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { ReferralsComponent } from './admin/referrals/referrals.component';
import { FeedsComponent } from './admin/feeds/feeds.component';
import { AddDiscoComponent } from './admin/add-disco/add-disco.component';
import { SupportComponent } from './admin/support/support.component';
// import { UserLayoutComponent } from './user-layout/user-layout/user-layout.component';
// import { UserReferralsComponent } from './user-layout/user-referrals/user-referrals.component';
import { SupportdashboardComponent } from './admin/supportdashboard/supportdashboard.component';
import { NavbarComponent } from './user-layout/navbar/navbar.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    // DashboardComponent,
    // ManageWalletComponent,
    // PayBillsComponent,
    // ProfileComponent,
    // ChangePasswordComponent,
    PagenotfoundComponent,
    // HelpComponent,
    // HistoryComponent,
    AdmindashboardComponent,
    AdminlayoutComponent,
    OrdersComponent,
    PaymentComponent,
    AdminhistoryComponent,
    UserManagementComponent,
    ReferralsComponent,
    FeedsComponent,
    AddDiscoComponent,
    SupportComponent,
    // UserLayoutComponent,
    // UserReferralsComponent,
    SupportdashboardComponent,
    NavbarComponent,
  ],
  imports: [
BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  BrowserAnimationsModule,
  MatStepperModule, MatInputModule, MatButtonModule,
  MatFormFieldModule,
  ToastrModule.forRoot(),
  Angular4PaystackModule,
  JwtModule.forRoot ({
    config: {
      tokenGetter: tokenGetter,
      whitelistedDomains: ['localhost:4000/dashboard'],
      blacklistedRoutes: ['localhost:4000/api/login']
    }
  })
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [AuthGuard, UserAuthService, BillService,
    {provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
