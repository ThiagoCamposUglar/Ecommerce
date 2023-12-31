import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { HasRoleDirective } from './directives/has-role.directive';
import { SharedModule } from './modules/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { RegisterComponent } from './register/register.component';
import { TextInputComponent } from './forms/text-input.component';
import { DatePickerComponent } from './forms/date-picker/date-picker.component';
import { AccountHomeComponent } from './account/account-home/account-home.component';
import { AccountEditComponent } from './account/account-edit/account-edit.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { DepartmentManagementComponent } from './admin/department-management/department-management.component';
import { CategoryManagementComponent } from './admin/category-management/category-management.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { ProductManagementComponent } from './admin/product-management/product-management.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    HasRoleDirective,
    NotFoundComponent,
    ServerErrorComponent,
    RegisterComponent,
    TextInputComponent,
    DatePickerComponent,
    AccountHomeComponent,
    AccountEditComponent,
    AdminPanelComponent,
    HasRoleDirective,
    DepartmentManagementComponent,
    CategoryManagementComponent,
    UserManagementComponent,
    ProductManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
