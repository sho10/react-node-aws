const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//db
mongoose.connect(process.env.DATABASE_CLOUD, { useNewUrlParser: true ,useUnifiedTopology: true })
.then( () => console.log('DB connected'))
.catch(err => console.log(err));

//import routes
const authRoutes = require('./routes/auth');

//app middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
//app.use(cors());
app.use(cors({origin: process.env.CLIENT_URL}));

//middlewares
app.use('/api', authRoutes);


// app.get('/api/register', (req, res) => {
//   res.json({
//     data: 'you hit register endpoint'
//   })
// })

const port = process.env.PORT;

app.listen(port, () => console.log(`API is running on port ${port} yay`));
