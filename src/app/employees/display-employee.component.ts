import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {
  @Input() employee : Employee;
  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  getNameAndGender(): string {
    return this.employee.name + ' ' + this.employee.gender;
  }


  // Parent component will use this Input property to pass
  // the employee object to which the template binds to
  //private _employee: Employee;
  /* @Input()
  set employee(val: Employee) {
    console.log('Current' + val.name);
    console.log('Previous : ' + (this._employee ? this._employee.name : 'NULL'));
    this._employee = val;
  }

  get employee(): Employee {
    return this._employee;
  } */




  /* private _employeeId: number;

  @Input()
  set employeeId(val: number) {
    console.log('employeeId changed from ' + JSON.stringify(this._employeeId)
      + ' to ' + JSON.stringify(val));
    this._employeeId = val;
  }
  get employeeId(): number {
    return this._employeeId;
  }

  private _employee: Employee;

  @Input()
  set employee(val: Employee) {
    console.log('employee changed from ' + JSON.stringify(this._employee)
      + ' to ' + JSON.stringify(val));
    this._employee = val;
  }
  get employee(): Employee {
    return this._employee;
  } */


  constructor() { }

  ngOnInit() {
  }

  handleClick(){
    this.notify.emit(this.employee);
  }

  // This life cycle hook receives SimpleChanges as an Input parameter
  // We can use it to retrieve previous and current values as shown below
  ngOnChanges(changes: SimpleChanges) {
    for (const propName of Object.keys(changes)) {

      const change = changes[propName];
      const from = JSON.stringify(change.previousValue);
      const to = JSON.stringify(change.currentValue);

      console.log(propName + ' changed from ' + from + ' to ' + to);
      /* const previousEmployee = <Employee>changes.employee.previousValue;
      const currentEmployee = <Employee>changes.employee.currentValue;
  
      console.log('Previous : ' + (previousEmployee ? previousEmployee.name : 'NULL'));
      console.log('Current : ' + currentEmployee.name); */
    }

  }
}
