import { Injectable } from '@angular/core';
import { CustomerModel } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  customers: CustomerModel[] = [
    { 
      id: 1,
      name:'Sarita Kharabe',
      address: 'King of prussia',
      email: 'saritak@gmail.com',
      phoneNumber: 484,
      identity: 'Adhar Card'
    },
    {
      id: 2,
      name: 'Dattatri patil',
      address: 'KOP ',
      email: 'dp@gmail.com',
      phoneNumber: 3033,
      identity: 'Driver Licence'
    }
  ]
  constructor() { }

  getCustomer(): CustomerModel[]{
    return this.customers;
  }

  onGetcustomer(id: number){
    return this.customers.find( x => x.id === id);
  }

  onAddCustomer(customer: CustomerModel){
    this.customers.push(customer);
  }

  onUpdateCustomer(customer: CustomerModel){
    let Oldcustomer = this.customers.find(x => x.id === customer.id);
    Oldcustomer.id = customer.id;
    Oldcustomer.name = customer.name;
    Oldcustomer.address = customer.address;
    Oldcustomer.email = customer.email;
    Oldcustomer.phoneNumber = customer.phoneNumber;
    Oldcustomer.identity = customer.identity

  }
  onDelete(id: number){
    let customer = this.customers.find(x => x.id === id);
    let index = this.customers.indexOf(customer, 0);
    this.customers.splice(index, 1);
  }
}
