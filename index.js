const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/receive', async (req, res) => {
  const firebaseURL = process.env.FIREBASE_URL;
  try {
    const response = await axios.put(firebaseURL, req.body);
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
