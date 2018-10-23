const express       = require('express'),
      bodyParser    = require('body-parser'),
      app = express();

app.use(bodyParser.json());

const PORT = 4000;
app.listen(PORT, () => console.log(`Personal Website running on port ${PORT}`));