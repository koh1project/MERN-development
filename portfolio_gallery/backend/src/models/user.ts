import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document {
  name: string;
  email: string;
}

export const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});
