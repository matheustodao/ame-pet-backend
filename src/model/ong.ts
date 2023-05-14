import { model, Schema } from 'mongoose';

export const Ong = model('Ong', new Schema({
  name: {
    type: String,
    required: true,
  },

  cnpj: {
    type: String,
    required: true,
  },

  longitude_latitude: {
    type: String,
    required: true,
  },
}))