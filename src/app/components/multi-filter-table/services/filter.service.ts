import { Injectable } from '@angular/core';
import { FilterModel } from '../model/FilterModel.model';
import { Employee } from '../model/Employee.model';
import { TextFilterOptions } from '../model/FilterOptions.model';
import { TextFilterServiceService } from './text-filter-service.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private textFilter: TextFilterServiceService) { }



  filter(filters: FilterModel[], data: Employee[]):Employee[]{
    let filtered_data:Employee[] = data;
    for(let filter of filters){
      if((typeof data[0][filter.col]) === "string"){
        filtered_data = this.callTextFilter(filter, filtered_data);
      }
    }

    return filtered_data;
  }

  callTextFilter(filter: FilterModel, data: Employee[]): Employee[]{
    console.log(filter.filter);
    switch(filter.filter){
      case TextFilterOptions.contains: {
        console.log("contains called");
        return this.textFilter.contains(filter.col, data, filter.filterValue.toLowerCase());
      }
      case TextFilterOptions.equals: {
        console.log("equals called")
        return this.textFilter.equals(filter.col, data, filter.filterValue.toLowerCase());
      }
      case TextFilterOptions.start_with: {
        console.log("called start with");
        return this.textFilter.startWith(filter.col, data, filter.filterValue.toLowerCase());
      }
      case TextFilterOptions.ends_with: {
        console.log("called ends with");
        return this.textFilter.endsWith(filter.col, data, filter.filterValue.toLowerCase());
      }
      case TextFilterOptions.is_empty: {
        console.log("called isempty with");
        return this.textFilter.isEmpty(filter.col, data, filter.filterValue.toLowerCase());
      }
      case TextFilterOptions.is_not_empty: {
        console.log("called isnotempty with");
        return this.textFilter.isNotEmpty(filter.col, data, filter.filterValue.toLowerCase());
      }
      default:{
        return data;
      }
    }
  }

}
