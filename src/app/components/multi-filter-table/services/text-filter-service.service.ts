import { Injectable } from '@angular/core';
import { Employee } from '../model/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class TextFilterServiceService {

  constructor() { }

  contains(column: (keyof Employee), objects: Employee[], filter: string): Employee[]{
    let filtered_data = []
    if(typeof objects[0][column] == "string"){
      for(let obj of objects){
        if((obj[column] as string).toLowerCase().includes(filter)){
          filtered_data.push(obj);
        }
      }
    }

    return filtered_data;
  }

  equals(column: (keyof Employee), objects: Employee[], filter: string): Employee[]{
    let filtered_data = []
    if(typeof objects[0][column] == "string"){
      for(let obj of objects){
        if((obj[column] as string).toLowerCase().localeCompare(filter)==0){
          filtered_data.push(obj);
        }
      }
    }

    return filtered_data;
  }

  startWith(column: (keyof Employee), objects: Employee[], filter: string): Employee[]{
    
    let filtered_data = []
    if(typeof objects[0][column] == "string"){
      for(let obj of objects){
        let str = (obj[column] as string);
        if(str.length >= filter.length){
          if(str.substring(0, filter.length).toLowerCase().localeCompare(filter) == 0){
            filtered_data.push(obj);
          }
        }
      }
    }

    return filtered_data;
  }

  endsWith(column: (keyof Employee), objects: Employee[], filter: string): Employee[]{
    let filtered_data = []
    if(typeof objects[0][column] == "string"){
      for(let obj of objects){
        let str = (obj[column] as string);
        if(str.length <= filter.length){
          if(str.substring(str.length-filter.length, filter.length).toLowerCase().localeCompare(filter) == 0){
            filtered_data.push(obj);
          }
        }
      }
    }

    return filtered_data;
  }

  isEmpty(column: (keyof Employee), objects: Employee[], filter: String): Employee[]{
    let filtered_data = []
    if(typeof objects[0][column] == "string"){
      for(let obj of objects){
        if((obj[column] as string).length === 0){
          filtered_data.push(obj);
        }
      }
    }

    return filtered_data;
  }

  isNotEmpty(column: (keyof Employee), objects: Employee[], filter: String): Employee[]{
    let filtered_data = []
    if(typeof objects[0][column] == "string"){
      for(let obj of objects){
        if((obj[column] as string).length > 0){
          filtered_data.push(obj);
        }
      }
    }

    return filtered_data;
  }
}
