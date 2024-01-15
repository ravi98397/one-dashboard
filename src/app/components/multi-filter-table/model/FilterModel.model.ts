import { Connectors } from "./Connectors.model";
import { Employee } from "./Employee.model";
import { TextFilterOptions } from "./FilterOptions.model";

export enum FilterTypes {
  string = "string",
  number = "number",
  boolean = "boolean",
  date = "date"
}

export interface FilterModel{
    col: (keyof Employee);
    connector: (Connectors);
    filtertype: FilterTypes;
    filter: TextFilterOptions;
    filterValue: string;
  }
  