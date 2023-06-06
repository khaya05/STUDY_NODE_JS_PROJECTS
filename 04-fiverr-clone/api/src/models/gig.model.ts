import mongoose from 'mongoose';

const gigSchema = new mongoose.Schema(
  {},
  {
    timestamps: true,
  }
);

export default mongoose.model('Gig', gigSchema);
