const { urlencoded } = require('body-parser');
const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const passport = require('passport') 
const session = require('express-session')
const MongoStore = require('connect-mongo')
require('./config/passport')(passport)

const port = process.env.PORT || 5000  
const app = express();

connectDB()

app.use(express.json())
app.use(urlencoded({extended: false}))
 
app.use(session({
    secret: 'keyboard cat',
    resave: false, 
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI}) 
  })) 

//passport middleware
app.use(passport.initialize())
app.use(passport.session())


app.use('/api/reviews', require('./routes/reviewRoutes'))
app.use('/auth', require('./routes/auth'))
app.use(errorHandler);


app.listen(port, () => console.log(`Server started on port ${port}`));
