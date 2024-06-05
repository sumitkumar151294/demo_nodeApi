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

router.get('/module', async (req, res) => {
  try {
   
    res.json({
      "response": [
              "DashBoard",
              "Customer",
              "Product Content",
              "Product Section",
              "Add Coupon",
              "Add bulk coupon",
              "Dynamic coupon",
              "Coupon List",
              "Category Master",
              "Deal Management",
              "Deal List",
              "Deal To Segment",
              "Campaign Master"
      ],
      "httpStatusCode": "201",
      "errorCode": "201",
  });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
