import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import authRoutes from './routes/auth.routes';
import specialRoutes from './routes/special.routes';
import videoRoutes from './routes/videos.routes';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';

const app = express();

app.set('port', config.PORT);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(videoRoutes);
app.use(authRoutes);
app.use(specialRoutes);
app.use(passport.initialize());
passport.use(passportMiddleware);
// app.get('/', (req,res)=>{
//     res.send('THE API is at http://localhost:${app.get('port')}')
// })

export default app;