import { logger, requestTime } from './middlewares.js';
import path, { dirname } from 'path';

import express from 'express';
import { fileURLToPath } from 'url';
import serverRoutes from './routes/servers.js';

// const __dirname = dirname(fileURLToPath(import.meta.url));
const __dirname = path.resolve();

const PORT = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'ejs'));
console.log(app.get('views'));

app.use(express.static(path.resolve(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(requestTime);
app.use(logger);
app.use(serverRoutes);

app.get('/', (req, res) => {
    res.render('index', { title: 'Main page', active: 'main' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About page', active: 'about' });
});

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
// });

// app.get('/about.html', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'static', 'about.html'));
// });

// app.get('/download.html', (req, res) => {
//     console.log(req.requestTime);

//     res.download(path.resolve(__dirname, 'static', 'index.html'));
// });

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});
