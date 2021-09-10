import {Component, OnInit} from '@angular/core';
import {CustomerService} from "./service/customer.service";
import {CustomerDto} from "./dto/CustomerDto";
import {Table} from "primeng/table";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  customers: CustomerDto[] = []
  first = 0;
  rows = 10;

  countries = [
    {label: 'All', value: 'ALL'},
    {label: 'Cameroon', value: 'CAMEROON'},
    {label: 'Ethiopia', value: 'ETHIOPIA'},
    {label: 'Morocco', value: 'MOROCCO'},
    {label: 'Mozambique', value: 'MOZAMBIQUE'},
    {label: 'Uganda', value: 'UGANDA'}
  ]

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.findAll(null)
  }

  findAll(country: any) {
    this.customerService.findAll(country).subscribe( response => {
      debugger
      console.log(response)
      this.customers = response
    })
  }

  changeCountry(value: any) {
    debugger
    if (value && value == "ALL")
      this.findAll(null)
    else
      this.findAll(value)
  }

}
