import { model, Schema } from 'mongoose';

export const Incident = model('Incident', new Schema({
  category_animal: {
    type: String,
    required: true,
    enum: ['domestico', 'gado', 'silvestre', 'selvagens'],
  },

  status: {
    type: String,
    required: true,
    enum: ['ongoing', 'canceled', 'done'],
    default: 'ongoing'
  },

  longitude_latitude: {
    type: String,
    required: true,
  },

  animal_size: {
    type: String,
    required: true,
    enum: ['mini', 'pequeno', 'medio', 'grande', 'gigante']
  },

  animal_lost: {
    type: Boolean,
    required: true,
  },

  adopt: {
    type: Boolean,
    required: true,
  },

  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },

  ong: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Ong'
  },
}))