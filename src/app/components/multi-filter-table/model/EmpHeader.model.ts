import { Employee } from "./Employee.model"

export enum SortEnum {
    unset = 0,
    asc = 1,
    desc = 2
  }
  
  export interface ColumnDetl{
    col: (keyof Employee)
    show: boolean
    sort: SortEnum
  }

export interface EmpHead {
    id :ColumnDetl
    Name :ColumnDetl
    Website :ColumnDetl
    Rating :ColumnDetl
    Email :ColumnDetl
    Phone :ColumnDetl
    Username :ColumnDetl
    City :ColumnDetl
    Country :ColumnDetl
    Company :ColumnDetl
    Position :ColumnDetl
    Updated_on :ColumnDetl
    Created_on :ColumnDetl
    Is_admin :ColumnDetl
    Salary :ColumnDetl
}