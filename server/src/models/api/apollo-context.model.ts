import { Request } from 'express';
import { IUser } from '../database/user.model';

export interface ApolloContext {

  req: Request;
  currentUser: IUser | undefined

}
