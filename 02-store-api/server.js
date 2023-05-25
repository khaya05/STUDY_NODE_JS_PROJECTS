const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./db/connect');

dotenv.config({ path: './config.env' });

const URI = process.env.DATABASE;

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connect DB
    await connectDB(URI);
    app.listen(port, () => console.log(`app running on port: ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
