const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use('/api', routes);

app.listen(5000, () => {
    console.log('server has started on port 5000');
});
