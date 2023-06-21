import { Superpower } from "./superpowers";


export interface Hero{
  id: number;
  name: string;
  superpowers?: Superpower[];
  image?: string;
}
