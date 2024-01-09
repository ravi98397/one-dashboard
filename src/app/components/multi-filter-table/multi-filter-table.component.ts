import { Component } from '@angular/core';
import { Employee } from './model/Employee.model';
import { tbldata } from './model/data';
import { KeyValuePipe } from '@angular/common';

const TBL_DATA: Employee[] = tbldata; 

@Component({
  selector: 'app-multi-filter-table',
  templateUrl: './multi-filter-table.component.html',
  styleUrl: './multi-filter-table.component.css'
})
export class MultiFilterTableComponent {
  displayedColumns: string[] = [
    "id",
    "Name",
    "Website",
    "Rating",
    "Email",
    "Phone",
    "Username",
    "City",
    "Country",
    "Company",
    "Position",
    "Updated_on",
    "Created_on",
    "Is_admin",
    "Salary"
]

  keys : (keyof Employee)[] = ['id',
  'Name',
  'Website',
  'Rating',
  'Email',
  'Phone',
  'Username',
  'City',
  'Country',
  'Company',
  'Position',
  'Updated_on',
  'Created_on',
  'Is_admin',
  'Salary']
  
  dataSource = TBL_DATA;

  constructor(){
    let key="id";
    let d = this.dataSource[0]["id"];
  }

  column = true;

  getValue(obj: Employee, key: String){
    console.log(obj[key as keyof Employee])
    return obj[key as keyof Employee];
  }

  myFunction(){}
}
