const { urlencoded } = require('body-parser');
const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const path = require('path')
const port = process.env.PORT || 5000  
const app = express();

connectDB()

app.use(express.json())
app.use(urlencoded({extended: false}))
 
app.use('/api/reviews', require('./routes/reviewRoutes'))
app.use(errorHandler);

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }
  


app.listen(port, () => console.log(`Server started on port ${port}`));
