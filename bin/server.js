const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();
app.use('/dist', express.static('dist'));
app.use('/', express.static('public'));

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`);
});