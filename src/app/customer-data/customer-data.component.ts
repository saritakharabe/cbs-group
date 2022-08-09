import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDataService } from '../shared/customer-data.service';
import { CustomerModel } from '../shared/customer.model';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss']
})
export class CustomerDataComponent implements OnInit {


  constructor(private route: Router, private customerService: CustomerDataService) { }

  ngOnInit(): void {
  }
  

}
