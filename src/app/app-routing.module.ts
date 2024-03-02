import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { CategoriesDetailsComponent } from './components/categories-details/categories-details.component';
import { ProductDetailesComponent } from './components/product-detailes/product-detailes.component';
import { BrandsDetailsComponent } from './components/brands-details/brands-details.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OrdersDetailsComponent } from './components/orders-details/orders-details.component';


const routes: Routes = [
  {path:'',
  canActivate:[authGuard],component:BlankLayoutComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'products',component:ProductsComponent},
    {path:'categories',component:CategoriesComponent},
    {path:'brands',component:BrandsComponent},
    {path:'cart',component:CartComponent},
    {path:'payment',component:PaymentComponent},
    {path:'wishlist',component:WishlistComponent},
    {path:'allorders',component:AllordersComponent},
    {path:'details/:id',component:ProductDetailesComponent},
    {path:'CategoriesDetails/:id',component:CategoriesDetailsComponent},
    {path:'ordersDetail',component:OrdersDetailsComponent},

    {path:'BrandsDetails/:id',component:BrandsDetailsComponent}




  ]},
  {path:'',component:AuthLayoutComponent,children:[
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'forgetPassword',component:ForgetpasswordComponent},
{path:'resetPassword',component:ResetPasswordComponent}
  ]},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
