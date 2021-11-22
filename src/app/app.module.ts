import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { TopnavComponent } from './shared/topnav/topnav.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { RegisterlistComponent } from './admin/register/registerlist/registerlist.component';
import { EditregisterComponent } from './admin/register/editregister/editregister.component';
import { MasterComponent } from './admin/master/master/master.component';
import { MasterlistComponent } from './admin/master/masterlist/masterlist.component';
import { EditmasterComponent } from './admin/master/editmaster/editmaster.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditvenderComponent } from './admin/vender/add vender/editvender/editvender.component';
import { ListvenderComponent } from './admin/vender/add vender/listvender/listvender.component';
import { ListvederoutsourceComponent } from './admin/vender/vender outsource/listvederoutsource/listvederoutsource.component';
import { EditvenderoutsourceComponent } from './admin/vender/vender outsource/editvenderoutsource/editvenderoutsource.component';
import { AddvenderComponent } from './admin/vender/add vender/addvender/addvender.component';
import { VenderoutsourceComponent } from './admin/vender/vender outsource/venderoutsource/venderoutsource.component';
import { CollectioncentereditComponent } from './admin/branch/collection-center/collectioncenteredit/collectioncenteredit.component';
import { CollectioncenterlistComponent } from './admin/branch/collection-center/collectioncenterlist/collectioncenterlist.component';
import { HomecollectionrlistComponent } from './admin/branch/home-collection/homecollectionrlist/homecollectionrlist.component';
import { HomecollectioneditComponent } from './admin/branch/home-collection/homecollectionedit/homecollectionedit.component';
import { PickupeditComponent } from './admin/branch/pick-up/pickupedit/pickupedit.component';
import { PickuplistComponent } from './admin/branch/pick-up/pickuplist/pickuplist.component';
import { SislistComponent } from './admin/branch/S-I-S/sislist/sislist.component';
import { SiseditComponent } from './admin/branch/S-I-S/sisedit/sisedit.component';
import { WalkineditComponent } from './admin/branch/walk-in/walkinedit/walkinedit.component';
import { WalkinlistComponent } from './admin/branch/walk-in/walkinlist/walkinlist.component';
import { WalkinComponent } from './admin/branch/walk-in/walkin/walkin.component';
import { HomecollectionComponent } from './admin/branch/home-collection/homecollection/homecollection.component';
import { CollectioncenterComponent } from './admin/branch/collection-center/collectioncenter/collectioncenter.component';
import { PicuppointComponent } from './admin/branch/pick-up/picuppoint/picuppoint.component';
import { SisComponent } from './admin/branch/S-I-S/sis/sis.component';
import { PaymentComponent } from './admin/billing/payment/payment.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopnavComponent,
    DashboardComponent,
    RegisterlistComponent,
    EditregisterComponent,
    MasterComponent,
    MasterlistComponent,
    EditmasterComponent,
    WalkinComponent,
    HomecollectionComponent,
    CollectioncenterComponent,
    PicuppointComponent,
    SisComponent,
    ForgetPasswordComponent,
    LoginComponent,
    SignupComponent,
    EditvenderComponent,
    ListvenderComponent,
    ListvederoutsourceComponent,
    EditvenderoutsourceComponent,
    AddvenderComponent,
    VenderoutsourceComponent,
    CollectioncentereditComponent,
    CollectioncenterlistComponent,
    HomecollectionrlistComponent,
    HomecollectioneditComponent,
    PickupeditComponent,
    PickuplistComponent,
    SislistComponent,
    SiseditComponent,
    WalkineditComponent,
    WalkinlistComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
