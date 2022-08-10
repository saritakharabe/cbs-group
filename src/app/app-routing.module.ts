import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AddEditCustomerComponent } from './customer-data/add-edit-customer/add-edit-customer.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { CustomerListComponent } from './customer-data/customer-list/customer-list.component';
import { CustomerServicesComponent } from './customer-services/customer-services.component';
import { HomeComponent } from './home/home.component';
import { TeamMembersComponent } from './team-members/team-members.component';

const routes: Routes = [
  { path:'', pathMatch: 'full', component: HomeComponent},
  { path: 'Home', component: HomeComponent},
  { path: 'About', component: AboutComponent},
  { path: 'customerlist', component: CustomerListComponent} ,
  { path: 'customer', component: CustomerDataComponent,
      children: [
        { path: 'add', component: AddEditCustomerComponent},
        { path: 'edit/:id', component: AddEditCustomerComponent},
      ]
  },
  { path: 'team-member', component: TeamMembersComponent},
  { path: 'services', component: CustomerServicesComponent},
  { path: 'contact', component: ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
