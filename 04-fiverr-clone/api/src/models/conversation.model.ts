import mongoose from 'mongoose';

const ConversationSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    sellerId: {
      type: String,
      required: true,
    },
    buyerId: {
      type: Number,
      required: true,
    },
    readBySeller: {
      type: Boolean,
      default: false
    },
    readByBuyer: {
      type: Boolean,
      default: false
    },
    lastMessage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Conversation', ConversationSchema);
