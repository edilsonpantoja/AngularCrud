import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

// The @Injectable() decorator is used to inject other dependencies
// into this service. As our service does not have any dependencies
// at the moment, we may remove the @Injectable() decorator and the
// service works exactly the same way. However, Angular recomends
// to always use @Injectable() decorator to ensures consistency
@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] = [
        {
            id: 1,
            name: 'Edilson',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'edilsonpantoja@titaniumtechcorp.com',
            dateOfBirth: new Date('10/25/1988'),
            department: '1',
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
            department: '2',
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
            department: '3',
            isActive: false,
            photoPath: 'assets/images/eddie.jpg'
          },
    ];

    getEmployees(): Employee[] {
        return this.listEmployees;
    }

    save(employee: Employee) {
        this.listEmployees.push(employee);
    } 
    
}
