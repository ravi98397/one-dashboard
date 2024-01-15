import { Component, OnInit } from '@angular/core';
import { Employee } from './model/Employee.model';
import { tbldata } from '../data/data';
import { DatePipe, KeyValuePipe } from '@angular/common';
import { EmpHead } from './model/EmpHeader.model';
import { Connectors } from './model/Connectors.model';
import { FilterModel, FilterTypes } from './model/FilterModel.model';
import { TextFilterOptions } from './model/FilterOptions.model';
import { FilterService } from './services/filter.service';

const TBL_DATA: any[] = tbldata; 

@Component({
  selector: 'app-multi-filter-table',
  templateUrl: './multi-filter-table.component.html',
  styleUrl: './multi-filter-table.component.css'
})
export class MultiFilterTableComponent implements OnInit {
  
  column_sel_toggle: boolean = false;
  filter_pallet_toggle: boolean = false;

  dataSource: Employee[] = TBL_DATA;

  filter_options = Object.values(TextFilterOptions);

  keys_sel: (keyof Employee)[] = []

  col_detl: EmpHead = {
    "id" : { col: 'id', show: true, sort: 0 },
    "Name" : { col: 'Name', show: true, sort: 0 },
    "Website" : { col: 'Website', show: true, sort: 0 },
    "Rating" : { col: 'Rating', show: true, sort: 0 },
    "Email" : { col: 'Email', show: true, sort: 0 },
    "Phone" : { col: 'Phone', show: true, sort: 0 },
    "Username" : { col: 'Username', show: true, sort: 0 },
    "City" : { col: 'City', show: true, sort: 0 },
    "Country" : { col: 'Country', show: true, sort: 0 },
    "Company" : { col: 'Company', show: true, sort: 0 },
    "Position" : { col: 'Position', show: true, sort: 0 },
    "Updated_on" : { col: 'Updated_on', show: true, sort: 0 },
    "Created_on" : { col: 'Created_on', show: true, sort: 0 },
    "Is_admin" : { col: 'Is_admin', show: true, sort: 0 },
    "Salary" : { col: 'Salary', show: true, sort: 0 }
  }

  keys : (keyof EmpHead)[] = ['id',
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

  filters: FilterModel[] = [{
    'col': 'id',
    'connector': Connectors.none,
    'filtertype': FilterTypes.string,
    'filter': TextFilterOptions.contains,
    'filterValue': ""
  }];

  constructor(public datepipe: DatePipe, public filterService: FilterService){}

  ngOnInit(){
    this.columnSelector();

    console.log(Object.keys(TextFilterOptions));
    for(let data in this.dataSource){
      /*Updated_on: "1/8/2024, 8:12:10 PM",
      Created_on: "3/10/2023", */
    }
  }

  column = true;

  getValue(obj: Employee, key: String){
    console.log(obj[key as keyof Employee])
    return obj[key as keyof Employee];
  }

  toggle_column_pallet(){this.column_sel_toggle = !this.column_sel_toggle;}
  toggle_filter_pallet(){this.filter_pallet_toggle = !this.filter_pallet_toggle;}

  columnSelector(){
    let col: (keyof EmpHead);
    let newkeys: (keyof Employee)[] = [];
    for(col in this.col_detl){
      if(this.col_detl[col].show == true){
        newkeys.push(this.col_detl[col].col);
      }
    }
    let lkey : (keyof EmpHead);
    for(lkey in this.col_detl){
      this.col_detl[lkey]
    }

    this.keys_sel = newkeys;
  }

  outFilterClick(): void{
    if(this.filter_pallet_toggle == true){
      this.filter_pallet_toggle = false;
    } 
  }
  outColumnClick(): void{
    if(this.column_sel_toggle == true){
      this.column_sel_toggle = false;
    } 
  }

  addFilter(){
    this.filters.push({
      'col': 'id',
      'connector': Connectors.and,
      'filtertype': FilterTypes.string,
      'filter': TextFilterOptions.contains,
      'filterValue': ""
    })
  }

  removeFilter(){
    
  }

  removeAllFilter(){
    this.filters = [{
      'col': 'id',
      'connector': Connectors.none,
      'filtertype': FilterTypes.string,
      'filter': TextFilterOptions.contains,
      'filterValue': ""
    }];
  }

  applyFilter(){
    console.log("filter invoked");
    this.dataSource = this.filterService.filter(this.filters, TBL_DATA);
  }
}
