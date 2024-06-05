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
router.post('/login', async (req, res) => {
  try {
   
    res.json({
      "response": [
          {
              "adminRoleId": 1,
              "userId": 2,
              "accessClientIds": "1",
              "clientRoleId": 2
          }
      ],
      "httpStatusCode": "201",
      "errorCode": "201",
      "errorMessage": "Login Successfully"
  });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
