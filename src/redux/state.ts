import { ridesData } from "../data/rides";

export interface IState {
  homeCount: number
  rides: any[]
}

export const initialState: IState = {
  homeCount: 0,
  rides: ridesData
}
