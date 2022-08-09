import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { AboutComponent } from './about/about.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { AddEditCustomerComponent } from './customer-data/add-edit-customer/add-edit-customer.component';
import { CustomerListComponent } from './customer-data/customer-list/customer-list.component';
import { AddEditMembersComponent } from './team-members/add-edit-members/add-edit-members.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerDataComponent,
    AboutComponent,
    ContactFormComponent,
    TeamMembersComponent,
    AddEditCustomerComponent,
    CustomerListComponent,
    AddEditMembersComponent,
    ServicesComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
