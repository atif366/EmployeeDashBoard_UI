import { EmployeeService } from './../services/employee.service';
import { Department } from './../model/department';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {

  employees: Employee[] = [];
  employeeService: EmployeeService;

  constructor(employeeService: EmployeeService) {
    this.employeeService = employeeService;
   }

   private getEmployees(){
      this.employeeService.getEmployeeList().subscribe( data => {
        console.log(data.object);
        this.employees = data.object;
      })
   }

  ngOnInit(): void {
    this.getEmployees();


  //   let courses : Course[];
  //   courses = [
  //     {id: 101, courseName : "Geometry"},
  //     {id: 102, courseName : "Probability"},
  //     {id: 103, courseName : "Statistics"}
  //   ]

  //   let departments : Department;
  //   departments = {id: 111, departmentName : "Mathematics", course : courses};


  //   this.employees = [
  //     {id: 1 , employeeName: "Test", department: departments}
  // ];
  }

}
