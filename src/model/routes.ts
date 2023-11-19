import { model, Schema } from 'mongoose';

export const Location = model('location', new Schema({
  coord: String,
  distance: String,
  time: String,
  routes: {
    type: [{
      lat: Number,
      long: Number
    }]
  }
}));
