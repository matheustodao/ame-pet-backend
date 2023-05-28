import { Types } from 'mongoose';

export interface UserParams {
  _id: Types.ObjectId,
  name: string,
  email: string,
  password: string
}

export interface UserStoreParams extends Omit<UserParams, '_id'> { }
