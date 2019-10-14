import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  mlhId: string;
}

export const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: false },

  mlhId: { type: String, required: false },
});

export const User = mongoose.model<IUser>('User', UserSchema);
