const express = require('express');
const path = require('path');

const homeRouter = require('./routes/home');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set("views", path.resolve("src", "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve("src", "public")));

app.use(homeRouter);


app.listen(port, () => console.log(`Server runing on port ${port}, access http://localhost:${port}`));