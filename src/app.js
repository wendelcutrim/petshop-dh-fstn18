const express = require('express');

const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    return res.status(200).json({ message: "Express works!" })
});


app.listen(port, () => console.log(`Server runing on port ${port}, access http://localhost:${port}`))