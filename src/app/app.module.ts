import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { BrandsDetailsComponent } from './components/brands-details/brands-details.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesDetailsComponent } from './components/categories-details/categories-details.component';
import { ProductDetailesComponent } from './components/product-detailes/product-detailes.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { NavbarAuthComponent } from './components/navbar-auth/navbar-auth.component';
import { NavbarBlankComponent } from './components/navbar-blank/navbar-blank.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductsComponent } from './components/products/products.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import {  HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchPipe } from './search.pipe';
import { OrdersDetailsComponent } from './components/orders-details/orders-details.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MyHttpInterceptor } from './shared/interceptor/my-http.interceptor';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    BrandsComponent,
    LoginComponent,
    LogOutComponent,
    RegisterComponent,
    NotfoundComponent,
    AllordersComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    BrandsDetailsComponent,
    CategoriesComponent,
    CategoriesDetailsComponent,
    ProductDetailesComponent,
    FooterComponent,
    ForgetpasswordComponent,
    MainSliderComponent,
    NavbarAuthComponent,
    NavbarBlankComponent,
    PaymentComponent,
    ProductsComponent,
    ResetPasswordComponent,
    WishlistComponent,
    SearchPipe,
    OrdersDetailsComponent,
    LoaderComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot(),
    FormsModule
   
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass:MyHttpInterceptor , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
