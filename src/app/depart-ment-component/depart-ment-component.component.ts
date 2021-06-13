import { Department } from './../model/department';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-depart-ment-component',
  templateUrl: './depart-ment-component.component.html',
  styleUrls: ['./depart-ment-component.component.css']
})
export class DepartMentComponentComponent implements OnInit {

  departments: Department[] = [];

  departmentService : DepartmentService;

  constructor(departmentService : DepartmentService) {
     this.departmentService = departmentService;
   }

  private getEmployees(){
    this.departmentService.getdepartmentList().subscribe( data => {
      console.log(data.object);
      this.departments = data.object;
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


  //   this.departments = [
  //     {id: 111, departmentName : "Mathematics", course : courses}
  //   ]


  // }

}
}
