import { TestBed } from '@angular/core/testing';
import { CustomerModel } from '../shared/customer.model';
import { CustomerDataService } from './customer-data.service';

describe('CustomerDataService', () => {
  let service: CustomerDataService;
  const mockCustomer : CustomerModel = { 
    address:'mockAddress',
    email: 'mockmail',
    identity:'mockidentity',
    id: 3
  } 

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add customer on calling onAddCustomer', () => {
    service.onAddCustomer(mockCustomer);
    expect(service.customers.length).toEqual(3);
    expect(service.customers[2].address).toEqual(mockCustomer.address);
  });

  it('should call on getCustomer and success', () =>{
    service.onAddCustomer(mockCustomer);
   const customer: CustomerModel =  service.onGetcustomer(mockCustomer.id);
    expect(customer).toEqual(mockCustomer);
  })
});
