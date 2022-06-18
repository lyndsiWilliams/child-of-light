import { createContext, Context } from "react";

export interface Status {
  age: number,
  hunger: number,
  mood: number,
  weight: number,
  discipline: number,
  setAge: Function,
  setHunger: Function,
  setMood: Function,
  setWeight: Function,
  setDiscipline: Function,
}

export const StatusContext: Context<Status> = createContext<Status>({} as Status);