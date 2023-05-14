import { model, Schema } from 'mongoose';

export const Clinic = model('Clinic', new Schema({
  cnpj: {
    type: String,
    required: true,
  },

  brandName: {
    type: String,
    required: true,
  },

  legalName: {
    type: String,
    required: true,
  },

  address: {
    cep: {
      type: String,
      required: true,
    },

    neighborhood: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    number: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true
    }
  },

  responsible: {
    required: {
      name: {
        type: String,
      },

      occupation: {
        type: String,
      },

      cpf: {
        type: String,
      },

      email: {
        type: String,
      }
    }
  },

  services: [{
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true
    }
  }],

  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}));
