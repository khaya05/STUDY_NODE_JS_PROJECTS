import http from 'http';
import mongoose from 'mongoose';
import app from './app';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 8000;
const server = http.createServer(app);

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log('DB connected');
  } catch (error) {
    console.error(error);
  }
};

connect();

server.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
