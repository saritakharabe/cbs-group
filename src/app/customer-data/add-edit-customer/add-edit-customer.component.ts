import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerDataService } from 'src/app/services/customer-data.service';
import { CustomerModel } from 'src/app/shared/customer.model';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.scss']
})
export class AddEditCustomerComponent implements OnInit {

  id: number;
  header: string;
  customer: CustomerModel = {}

  constructor(private router: ActivatedRoute, private route: Router, private customerService: CustomerDataService ) { }

  ngOnInit(): void {
    this.id = +this.router.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Add Customer' : 'Edit Customer';

    if(this.id != 0){
      this.customer = this.customerService.onGetcustomer(this.id);
    }
  }

  onSubmit(form: NgForm){
      let customer: CustomerModel = {
          id: form.value.id,
          name: form.value.name,
          address: form.value.address,
          email: form.value.email,
          phoneNumber: form.value.phoneNumber,
          identity: form.value.identity
      }
      if(this.id === 0){
        this.customerService.onAddCustomer(customer);
      }
      else{
        this.customerService.onUpdateCustomer(customer);
      }
      this.route.navigate(['/customerlist']);
  }
}
