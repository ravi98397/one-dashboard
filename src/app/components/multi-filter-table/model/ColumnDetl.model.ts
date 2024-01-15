import { Employee } from "./Employee.model"
import { SortEnum } from "./SortEnum.model"

export interface ColumnDetl{
    col: (keyof Employee)
    show: boolean
    sort: SortEnum
  }