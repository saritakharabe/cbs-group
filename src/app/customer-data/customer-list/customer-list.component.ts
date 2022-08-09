import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDataService } from 'src/app/shared/customer-data.service';
import { CustomerModel } from 'src/app/shared/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: CustomerModel[];
  constructor(private customerService: CustomerDataService, private route:Router ) { }

  ngOnInit(): void {
    this.customers = this.customerService.getCustomer();
  }

  onAddCustomer(): void {
    this.route.navigate(['/customer/add']);
  }
  
  onDelete(id: number){
    this.customerService.onDelete(id);
    alert('are you sure, you want to delete this customer ?');
  }
}
