import { Component } from '@angular/core';
import { Employee } from './model/Employee.model';
import { tbldata } from './model/data';
import { KeyValuePipe } from '@angular/common';
import { EmpHead } from './model/EmpHeader.model';

const TBL_DATA: Employee[] = tbldata; 

export enum SortEnum {
  unset = 0,
  asc = 1,
  desc = 2
}

export interface ColumnDetl{
  col: String
  show: boolean
  sort: SortEnum
}

@Component({
  selector: 'app-multi-filter-table',
  templateUrl: './multi-filter-table.component.html',
  styleUrl: './multi-filter-table.component.css'
})
export class MultiFilterTableComponent {
  col_detl: EmpHead = {
    "id" : { col: "id", show: true, sort: 0 },
    "Name" : { col: "id", show: true, sort: 0 },
    "Website" : { col: "id", show: true, sort: 0 },
    "Rating" : { col: "id", show: true, sort: 0 },
    "Email" : { col: "id", show: true, sort: 0 },
    "Phone" : { col: "id", show: true, sort: 0 },
    "Username" : { col: "id", show: true, sort: 0 },
    "City" : { col: "id", show: true, sort: 0 },
    "Country" : { col: "id", show: true, sort: 0 },
    "Company" : { col: "id", show: true, sort: 0 },
    "Position" : { col: "id", show: true, sort: 0 },
    "Updated_on" : { col: "id", show: true, sort: 0 },
    "Created_on" : { col: "id", show: true, sort: 0 },
    "Is_admin" : { col: "id", show: true, sort: 0 },
    "Salary" : { col: "id", show: true, sort: 0 }
  }

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
