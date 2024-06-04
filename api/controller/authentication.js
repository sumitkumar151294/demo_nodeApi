const express = require('express');

const router = express.Router();

// get all user authentication data
router.post('/', async (req, res) => {
  try {
    res.json({
  data:{
  isloggedin:true
}
    });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/category', async (req, res) => {
  try {
    res.json({
data:{
  errorcoode: 201,
  message:"created succesfully"
}
    });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
