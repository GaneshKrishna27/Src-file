import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerComponent } from './Seller/SellerIndex/seller.component';
import { BuyerComponent } from './Buyer/BuyerIndex/buyer.component';

import { ServicesComponent } from './services/services.component';

import { AdditemsComponent } from './Seller/additems/additems.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { ViewProfileComponent } from './Seller/view-profile/view-profile.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewcartComponent } from './Buyer/viewcart/viewcart.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { ViewprofileComponent } from './Buyer/viewprofile/viewprofile.component';
import { AdminIndexComponent } from './Admin/admin-index/admin-index.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { LoginComponent } from './Account/login/login.component';
import { SignupSellerComponent } from './Account/signup-seller/signup-seller.component';
import { SignupBuyerComponent } from './Account/signup-buyer/signup-buyer.component';
import { BuyproductComponent } from './Buyer/buyproduct/buyproduct.component';
import { HomeComponent } from './Account/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerComponent,
    BuyerComponent,
    
    ServicesComponent,
   
    AdditemsComponent,
    ViewItemsComponent,
    ViewReportsComponent,
    ViewProfileComponent,
    SearchComponent,
    ViewcartComponent,
    PurchaseHistoryComponent,
    ViewprofileComponent,
    AdminIndexComponent,
    BlockUnblockBuyerComponent,
    BlockUnblockSellerComponent,
    AddCategoryComponent,
    AddSubCategoryComponent,
    DailyReportsComponent,
    LoginComponent,
    SignupSellerComponent,
    SignupBuyerComponent,
    BuyproductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
