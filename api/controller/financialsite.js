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
});
router.get("/getclientmaster", async (req, res) => {
  try {
    res.json({
      response: [
        {
          clientName: "name",
          description: "no",
          date: "23/3/2024",
          status: "Active",
        },
        {
          clientName: "name",
          description: "no",
          date: "23/3/2024",
          status: "Active",
        },
        {
          clientName: "name",
          description: "no",
          date: "23/3/2024",
          status: "Active",
        },
        {
          clientName: "name",
          description: "no",
          date: "23/3/2024",
          status: "Non-Active",
        },
        {
          clientName: "name",
          description: "no",
          date: "23/3/2024",
          status: "Active",
        },
        {
          clientName: "name",
          description: "no",
          date: "23/3/2024",
          status: "Non-Active",
        },
        {
          clientName: "name",
          description: "no",
          date: "23/3/2024",
          status: "Active",
        },
        {
          clientName: "name",
          description: "no",
          date: "23/3/2024",
          status: "Active",
        },
        {
          clientName: "name",
          description: "no",
          date: "23/3/2024",
          status: "Active",
        },
        {
          clientName: "name",
          description: "no",
          date: "23/3/2024",
          status: "Active",
        },
        {
          clientName: "name",
          description: "no",
          date: "23/3/2024",
          status: "Active",
        },
        {
          clientName: "name",
          description: "no",
          date: "23/3/2024",
          status: "Active",
        },
      ],
      httpStatusCode: "200",
      errorCode: "200",
      errorMessage: "",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.post("/postclientmaster", async (req, res) => {
  try {
    res.json({
      errorCode: "201",
      errorMessage: "Created Sucessfully",
      httpStatusCode: "201",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}); router.post("/posttemplatetypemaster", async (req, res) => {
  try {
    res.json({
      errorCode: "201",
      errorMessage: "Created Sucessfully",
      httpStatusCode: "201",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});router.get("/gettemplatetypemaster", async (req, res) => {
  try {
    res.json({
      response: [
        {
          type: "Virat",
          description: "no",
          date: "23/3/2024",
          status: "Active",

        }, {
          type: "Noor",
          description: "no",
          date: "23/3/2024",
          status: "Active",

        }, {
          type: "virat",
          description: "no",
          date: "23/3/2024",
          status: "Active",

        }, {
          type: "virat",
          description: "no",
          date: "23/3/2024",
        }, {
          type: "virat",
          description: "no",
          date: "23/3/2024",
          status: "Active",

        }, {
          type: "virat",
          description: "no",
          date: "23/3/2024",
          status: "Active",

        }, {
          type: "virat",
          description: "no",
          date: "23/3/2024",
          status: "Active",

        }, {
          type: "virat",
          description: "no",
          date: "23/3/2024",
          status: "Active",

        }, {
          type: "virat",
          description: "no",
          date: "23/3/2024",
          status: "Active",

        }, {
          type: "virat",
          description: "no",
          date: "23/3/2024",
          status: "Active",

        }, {
          type: "virat",
          description: "no",
          date: "23/3/2024",
          status: "Active",

        }, {
          type: "virat",
          description: "no",
          date: "23/3/2024",
          status: "Active",

        }, {
          type: "virat",
          description: "no",
          date: "23/3/2024",
          status: "Active",

        }, {
          type: "virat",
          description: "no",
          date: "23/3/2024",
          status: "non-Active",

        }, {
          type: "virat",
          description: "no",
          date: "23/3/2024",
          status: "Active",

        }, {
          type: "virat",
          description: "no",
          date: "23/3/2024",
          status: "Active",

        }, {
          type: "virat",
          description: "no",
          date: "23/3/2024",
          status: "Active",

        }, {
          type: "virat",
          description: "no",
          date: "23/3/2024",
          status: "Active",

        }, {
          type: "virat",
          description: "no",
          date: "23/3/2024",
          status: "Active",

        },

      ],
      httpStatusCode: "200",
      errorCode: "200",
      errorMessage: "",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
