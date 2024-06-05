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
router.get('/customerSegment', async (req, res) => {
  try {
   
    res.json({
      "response": [
          {
              "id": "#7899",
              "segementName": "non-banner",
              "currentStatus": "Non-Active",
              "date": "15/2/2024"
          },
          {
            "id": "#5677",
            "segementName": "Header",
            "currentStatus": "Non-Active",
            "date": "14/2/2024"
        },
        {
          "id": "#5678",
          "segementName": "Supplier 3",
          "currentStatus": "Non-Active",
          "date": "13/2/2024"
       },
       {
        "id": "#4567",
        "segementName": "Top Banner",
        "currentStatus": "Non-Active",
        "date": "12/2/2024"
      },
      ],
      "httpStatusCode": "201",
      "errorCode": "201",
      "errorMessage": ""
  });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
