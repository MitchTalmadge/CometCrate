import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  onboarded: boolean;

  // OAuth
  mlhId: string;

  // Virtual
  admin: boolean;
}

export const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: false },

  onboarded: { type: Boolean, required: false, default: false },

  // OAuth
  mlhId: { type: String, required: false },
});

UserSchema.virtual('admin').get(function () {
  const userEmailDomain = this.email.substring(this.email.lastIndexOf('@') + 1);

  if (process.env.ADMIN_DOMAIN
    && userEmailDomain.toLowerCase() === process.env.ADMIN_DOMAIN.toLowerCase()) {
    return true;
  }

  if (process.env.ADMIN_EMAILS) {
    const emails = process.env.ADMIN_EMAILS.split(',');
    if (emails.some((email) => this.email.toLowerCase() === email.trim().toLowerCase())) {
      return true;
    }
  }

  return false;
});

UserSchema.post('init', (doc) => {
  // TODO: Migrations
});

export const User = mongoose.model<IUser>('User', UserSchema);
