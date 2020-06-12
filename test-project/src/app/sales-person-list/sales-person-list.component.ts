import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Create array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "anup@gmail.com", 50000),
    new SalesPerson("John", "Doe", "john@gmail.com", 40000),
    new SalesPerson("Tom", "Baker", "tom@gmail.com", 45000),
    new SalesPerson("Ahay", "Ghale", "ajay@gmail.com", 20000)
  ]

}
