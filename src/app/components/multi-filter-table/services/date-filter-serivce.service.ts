import { Injectable } from '@angular/core';
import { Employee } from '../model/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class DateFilterSerivceService {

  constructor() { }

  compareDate(date1 :Date, date2 :Date): number{
    if(date1.getFullYear < date2.getFullYear) return -1;
    if(date1.getFullYear > date2.getFullYear) return 1;

    if(date1.getMonth < date2.getMonth) return -1;
    if(date1.getMonth > date2.getMonth) return 1;

    if(date1.getDay < date2.getDay) return -1;
    if(date1.getDay > date2.getDay) return 1;

    if(date1.getHours < date2.getHours) return -1;
    if(date1.getHours > date2.getHours) return 1;

    if(date1.getMinutes < date2.getMinutes) return -1;
    if(date1.getMinutes > date2.getMinutes) return 1;

    if(date1.getSeconds < date2.getSeconds) return -1;
    if(date1.getSeconds > date2.getSeconds) return 1;

    if(date1.getMilliseconds < date2.getMilliseconds) return -1;
    if(date1.getMilliseconds > date2.getMilliseconds) return -1;

    return 0;
  }

  compare(date1 :Date, date2 :Date): number{
    if(date1.getFullYear < date2.getFullYear) return -1;
    if(date1.getFullYear > date2.getFullYear) return 1;

    if(date1.getMonth < date2.getMonth) return -1;
    if(date1.getMonth > date2.getMonth) return 1;

    if(date1.getDay < date2.getDay) return -1;
    if(date1.getDay > date2.getDay) return 1;

    if(date1.getHours < date2.getHours) return -1;
    if(date1.getHours > date2.getHours) return 1;

    if(date1.getMinutes < date2.getMinutes) return -1;
    if(date1.getMinutes > date2.getMinutes) return 1;

    if(date1.getSeconds < date2.getSeconds) return -1;
    if(date1.getSeconds > date2.getSeconds) return 1;

    if(date1.getMilliseconds < date2.getMilliseconds) return -1;
    if(date1.getMilliseconds > date2.getMilliseconds) return -1;

    return 0;
  }

  is(column: (keyof Employee), objects: Employee[], filter: Date): Employee[]{
    let filtered_data :Employee[] = [];
    for(let indx in objects){
      if(objects[indx][column] != null && objects[indx][column] != undefined){
        if((typeof objects[indx][column]) === 'object'){
          if(this.compareDate(objects[indx][column] as Date, filter) === 0){
            filtered_data.push(objects[indx]);
          }
        }
      }
    }
    return filtered_data;
  } 

  isNot(column: (keyof Employee), objects: Employee[], filter: Date): Employee[]{
    let filtered_data :Employee[] = [];
    for(let indx in objects){
      if(objects[indx][column] != null && objects[indx][column] != undefined){
        if((typeof objects[indx][column]) === 'object'){
          if(this.compareDate(objects[indx][column] as Date, filter) != 0){
            filtered_data.push(objects[indx]);
          }
        }
      }
    }
    return filtered_data;}

  isAfter(column: (keyof Employee), objects: Employee[], filter: Date): Employee[]{
    let filtered_data :Employee[] = [];
    for(let indx in objects){
      if(objects[indx][column] != null && objects[indx][column] != undefined){
        if((typeof objects[indx][column]) === 'object'){
          if(this.compareDate(objects[indx][column] as Date, filter) == 1){
            filtered_data.push(objects[indx]);
          }
        }
      }
    }
    return filtered_data;}

  isOnOrAfter(column: (keyof Employee), objects: Employee[], filter: Date): Employee[]{
    let filtered_data :Employee[] = [];
    for(let indx in objects){
      if(objects[indx][column] != null && objects[indx][column] != undefined){
        if((typeof objects[indx][column]) === 'object'){
          if(this.compareDate(objects[indx][column] as Date, filter) >= 0){
            filtered_data.push(objects[indx]);
          }
        }
      }
    }
    return filtered_data;}

  isBefore(column: (keyof Employee), objects: Employee[], filter: Date): Employee[]{
    let filtered_data :Employee[] = [];
    for(let indx in objects){
      if(objects[indx][column] != null && objects[indx][column] != undefined){
        if((typeof objects[indx][column]) === 'object'){
          if(this.compareDate(objects[indx][column] as Date, filter) == -1){
            filtered_data.push(objects[indx]);
          }
        }
      }
    }
    return filtered_data;}

  isOnOrBefore(column: (keyof Employee), objects: Employee[], filter: Date): Employee[]{
    let filtered_data :Employee[] = [];
    for(let indx in objects){
      if(objects[indx][column] != null && objects[indx][column] != undefined){
        if((typeof objects[indx][column]) === 'object'){
          if(this.compareDate(objects[indx][column] as Date, filter) <= 0){
            filtered_data.push(objects[indx]);
          }
        }
      }
    }
    return filtered_data;}

  isEmpty(column: (keyof Employee), objects: Employee[], filter: Date): Employee[]{
    let filtered_data :Employee[] = [];
    for(let indx in objects){
      if(objects[indx][column] == null || objects[indx][column] == undefined){
        filtered_data.push(objects[indx]);
      }
    }
    return filtered_data;}

  isNotEmpty(column: (keyof Employee), objects: Employee[], filter: Date): Employee[]{
    let filtered_data :Employee[] = [];
    for(let indx in objects){
      if(objects[indx][column] != null && objects[indx][column] != undefined){
        filtered_data.push(objects[indx]);
      }
    }
    return filtered_data;
  }
}
