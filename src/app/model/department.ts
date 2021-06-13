import { Course } from "./course";

export class Department {
  id : number | 0 | undefined;
  departmentName!: string;
  course: Course[] = [];
}
