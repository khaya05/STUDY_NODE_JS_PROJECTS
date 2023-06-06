import mongoose from 'mongoose';

const gigSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    dec: {
      type: String,
      required: true,
    },
    totalStarts: {
      type: Number,
      default: 0,
    },
    starNumber: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    cover: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: false,
    },
    shortTitle: {
      type: String,
      required: true,
    },
    shortDesc: {
      type: String,
      required: false,
    },
    deliveryTime: {
      type: Number,
      default: 0,
    },
    sales: {
      type: Number,
      default: 0,
    },
    revisionNumber: {
      type: Number,
      default: 0,
    },
    features: {
      type: [String],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Gig', gigSchema);
