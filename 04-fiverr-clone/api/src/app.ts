import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import userRouter from './routes/user.router';
import orderRouter from './routes/order.router';
import reviewRouter from './routes/review.router';
import gigRouter from './routes/gig.router';
import conversationRouter from './routes/conversation.router';
import messageRouter from './routes/message.router';

const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const fun = () => {};

// Routes
app.use('/api/gigs', gigRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/messages', messageRouter);
app.use('/api/conversations', conversationRouter);

export default app;
