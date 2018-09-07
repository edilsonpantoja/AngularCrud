import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Edilson',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'edilsonpantoja@titaniumtechcorp.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/edilson.jpg'
    },
    {
      id: 2,
      name: 'Erica',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('03/23/1979'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/erica.jpg'
    },
    {
      id: 3,
      name: 'Eddie',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('09/10/1977'),
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/eddie.jpg'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
