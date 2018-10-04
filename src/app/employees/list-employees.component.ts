import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  employeeToDisplay: Employee;
  dataFromChild: Employee;

  searchTerm: string; 

  // Inject EmployeeService using the constructor
  // The private variable _employeeService which points to
  // EmployeeService singelton instance is then available
  // throughout the class and can be accessed using this keyword
  constructor(private _employeeService: EmployeeService,
              private _router: Router) { }

  // Call the getEmployees() service method of EmployeeService
  // using the private variable _employeeService
  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    //this.employeeToDisplay = this.employees[0];
  }

  onClick(employeeId: number) {
      this._router.navigate(['/employees', employeeId]);
  }

  handleNotify(eventData: Employee){
    this.dataFromChild = eventData;
  }

  /* nextEmployee(): void {
    if (this.employeeToDisplay.id <= 2) {
      this.employeeToDisplay = this.employees[this.employeeToDisplay.id];
    } else {
      this.employeeToDisplay = this.employees[0];
    }
  } */

}
