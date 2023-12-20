import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountHomeComponent } from './account/account-home/account-home.component';
import { AccountEditComponent } from './account/account-edit/account-edit.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { adminGuard } from './guards/admin.guard';
import { DepartmentManagementComponent } from './admin/department-management/department-management.component';
import { CategoryManagementComponent } from './admin/category-management/category-management.component';
import { ProductManagementComponent } from './admin/product-management/product-management.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', 
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'admin', component: AdminPanelComponent, canActivate: [adminGuard]},
      {path: 'admin/department', component: DepartmentManagementComponent, canActivate: [adminGuard]},
      {path: 'admin/category', component: CategoryManagementComponent, canActivate: [adminGuard]},
      {path: 'admin/product', component: ProductManagementComponent, canActivate: [adminGuard]},
      {path: 'admin/user', component: UserManagementComponent, canActivate: [adminGuard]}
    ]
  },
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'my-account', component: AccountHomeComponent},
  {path: 'account/edit', component: AccountEditComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
