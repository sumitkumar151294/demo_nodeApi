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

router.post('/login', async (req, res) => {
  try {
    res.json({

        errorCode
        : 
        "201",
        errorMessage
        : 
        "Login Successfully",
        httpStatusCode
        : 
        "201"

    });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
