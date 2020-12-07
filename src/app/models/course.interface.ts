import { IAuthor } from './author.interface';

export interface ICourse {
  id?: number;
  name: string;
  date: string | Date;
  length: number;
  description: string;
  isTopRated: boolean
  authors?: IAuthor[]
}