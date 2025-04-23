export interface ISubcontractor {
  name: string;
  unit: string;
  cost: string;
  tax: string;
  buffer: string;
  markup: string;
}

export interface ILabour {
  hours: string;
  guys: string;
  entry: string;
  markup: string;
}

export interface IMaterial {
  unit: string;
  guys: string;
  tax: string;
  delivery: string;
}

export interface ITask {
  id: number;
  name: string;
  responsible1: string;
  responsible2: string;
  subcontractors: ISubcontractor[];
  labour: ILabour[];
  material: IMaterial[];
}

export interface IEstimate {
  id: number;
  description: string;
  tasks: ITask[];
}