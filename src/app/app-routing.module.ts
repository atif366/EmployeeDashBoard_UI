import { DepartMentComponentComponent } from './depart-ment-component/depart-ment-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';


const routes: Routes = [
  {path: 'employees', component: EmployeeComponentComponent},
  {path: 'department', component: DepartMentComponentComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
