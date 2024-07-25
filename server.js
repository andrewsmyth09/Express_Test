// const exp = require('constants');
import express from 'express'
import path from 'path'
import post from './routes/posts.js'
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

const port = process.env.PORT || 8000;
const app = express();
//const posts = require('./routes/posts')

// Setup static folder
// app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'))
// })

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Logger middleware
app.use(logger);

// Routes
app.use('/api/posts', post);

// Error handlers
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log('Server is running on port', port);
});