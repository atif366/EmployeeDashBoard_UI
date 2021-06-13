import { Department } from './department';
export class Employee {
  id : number | undefined;
  employeeName : string | undefined;
  department: Department = new Department;
}
