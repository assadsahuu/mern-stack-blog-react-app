import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
const app = express();
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js '
import cors from 'cors'



app.use(express.json());
dotenv.config();
mongoose.connect(process.env.mongooo)
    .then(() => {
        console.log('Mongodb is connected')
    }).catch(err => {
        console.log(err)
    })



app.listen(3000, () => {
    console.log('server is running on port 3000 !')
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
});