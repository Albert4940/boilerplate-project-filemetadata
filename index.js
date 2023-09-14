const app = require('./myApp');
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;


mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Database connection successful');
  })
    .catch((err) => {
      console.error('Database connection error');
    });

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
