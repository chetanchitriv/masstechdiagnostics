import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './admin/billing/payment/payment.component';
import { CollectioncenterComponent } from './admin/branch/collection-center/collectioncenter/collectioncenter.component';
import { CollectioncentereditComponent } from './admin/branch/collection-center/collectioncenteredit/collectioncenteredit.component';
import { CollectioncenterlistComponent } from './admin/branch/collection-center/collectioncenterlist/collectioncenterlist.component';
import { HomecollectionComponent } from './admin/branch/home-collection/homecollection/homecollection.component';
import { HomecollectioneditComponent } from './admin/branch/home-collection/homecollectionedit/homecollectionedit.component';
import { HomecollectionrlistComponent } from './admin/branch/home-collection/homecollectionrlist/homecollectionrlist.component';
import { PickupeditComponent } from './admin/branch/pick-up/pickupedit/pickupedit.component';
import { PickuplistComponent } from './admin/branch/pick-up/pickuplist/pickuplist.component';
import { PicuppointComponent } from './admin/branch/pick-up/picuppoint/picuppoint.component';
import { SisComponent } from './admin/branch/S-I-S/sis/sis.component';
import { SiseditComponent } from './admin/branch/S-I-S/sisedit/sisedit.component';
import { SislistComponent } from './admin/branch/S-I-S/sislist/sislist.component';
import { WalkinComponent } from './admin/branch/walk-in/walkin/walkin.component';
import { WalkineditComponent } from './admin/branch/walk-in/walkinedit/walkinedit.component';
import { WalkinlistComponent } from './admin/branch/walk-in/walkinlist/walkinlist.component';
import { EditmasterComponent } from './admin/master/editmaster/editmaster.component';
import { MasterComponent } from './admin/master/master/master.component';
import { MasterlistComponent } from './admin/master/masterlist/masterlist.component';
import { RegisterComponent } from './admin/register/register/register.component';
import { RegisterlistComponent } from './admin/register/registerlist/registerlist.component';
import { AddvenderComponent } from './admin/vender/add vender/addvender/addvender.component';
import { EditvenderComponent } from './admin/vender/add vender/editvender/editvender.component';
import { ListvenderComponent } from './admin/vender/add vender/listvender/listvender.component';
import { ListvederoutsourceComponent } from './admin/vender/vender outsource/listvederoutsource/listvederoutsource.component';
import { VenderoutsourceComponent } from './admin/vender/vender outsource/venderoutsource/venderoutsource.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component:SignupComponent ,
  },
  {
    path: 'forget-password',
    component:ForgetPasswordComponent ,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'register', component: RegisterComponent, },
      { path: 'master', component: MasterComponent },
      { path: 'masterlist', component: MasterlistComponent },
      { path: 'editmaster', component:  EditmasterComponent }, 
      { path: 'registerlist', component: RegisterlistComponent },
      { path: 'addvender', component: AddvenderComponent },
      { path: 'vendorlist', component: ListvenderComponent },
      { path: 'editvender', component:  EditvenderComponent },
      { path: 'venderoutsource', component:  VenderoutsourceComponent },
      { path: 'venderoutsourcelist', component:  ListvederoutsourceComponent },
     { path: 'walkin', component:  WalkinComponent },
      { path: 'walkinlist', component: WalkinlistComponent },
      { path: 'walkinedit', component:  WalkineditComponent },
      { path: 'homecollection', component:  HomecollectionComponent },
      { path: 'homecollectionlist', component:HomecollectionrlistComponent },
      { path: 'homecollectionedit', component:  HomecollectioneditComponent },
      { path: 'collectioncenter', component: CollectioncenterComponent },
      { path: 'Collectioncenterlist', component: CollectioncenterlistComponent },
      { path: 'Collectioncenteredit', component:  CollectioncentereditComponent },
      { path: 'picuppoint', component: PicuppointComponent },
      { path: 'picuplist', component: PickuplistComponent },
      { path: 'picupedit', component:  PickupeditComponent },
      { path: 'sis', component: SisComponent },
      { path: 'sislist', component: SislistComponent },
      { path: 'sisedit', component:  SiseditComponent },
      { path: 'billing', component:  PaymentComponent },
      
    ],
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
