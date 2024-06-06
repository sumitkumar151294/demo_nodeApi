const express = require("express");

const router = express.Router();

// get all user authentication data
router.post("/", async (req, res) => {
  try {
    res.json({
      data: {
        isloggedin: true,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/postlogin", async (req, res) => {
  try {
    res.json({
      response: [
        {
          email: "user@gmail.com",
          password: "123456",
        },
      ],
      errorCode: "201",
      errorMessage: "Login Sucessfully",
      httpStatusCode: "201",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.post("/postvariable", async (req, res) => {
  try {
    res.json({
      errorCode: "201",
      errorMessage: "Created Sucessfully",
      httpStatusCode: "201",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getvariable", async (req, res) => {
  try {
    res.json({
      response: [
        {
          variableName: "name",
          variable: "@name",
          date: "23/3/2024",
        },
        {
          variableName: "name",
          variable: "@name",
          date: "23/3/2024",
        },
        {
          variableName: "name",
          variable: "@name",
          date: "23/3/2024",
        },
        {
          variableName: "name",
          variable: "@name",
          date: "23/3/2024",
        },
        {
          variableName: "name",
          variable: "@name",
          date: "23/3/2024",
        },
        {
          variableName: "name",
          variable: "@name",
          date: "23/3/2024",
        },
        {
          variableName: "name",
          variable: "@name",
          date: "23/3/2024",
        },
        {
          variableName: "name",
          variable: "@name",
          date: "23/3/2024",
        },
        {
          variableName: "name",
          variable: "@name",
          date: "23/3/2024",
        },
        {
          variableName: "name",
          variable: "@name",
          date: "23/3/2024",
        },
        {
          variableName: "name",
          variable: "@name",
          date: "23/3/2024",
        },
        {
          variableName: "name",
          variable: "@name",
          date: "23/3/2024",
        },
      ],
      httpStatusCode: "200",
      errorCode: "200",
      errorMessage: "",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});router.post("/postclientmaster", async (req, res) => {
  try {
    res.json({
      errorCode: "201",
      errorMessage: "Created Sucessfully",
      httpStatusCode: "201",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
