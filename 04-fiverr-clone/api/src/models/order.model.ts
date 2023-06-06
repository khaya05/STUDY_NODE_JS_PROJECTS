import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    gigId: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sellerId: {
      type: String,
      required: true,
    },
    buyerId: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: String,
      default: false,
    },
    payment_intent: {
      type: String,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Order', orderSchema);
