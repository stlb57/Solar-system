const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({
    status: 'online',
    system: 'solar-system-1',
    telemetry: 'nominal'
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Telemetry service listening on port ${port}`);
  });
}

module.exports = app;

//modified file