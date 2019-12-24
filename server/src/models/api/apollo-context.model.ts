import { IUser } from '../database/user.model';

export interface ApolloContext {

  currentUser: IUser | undefined

}
