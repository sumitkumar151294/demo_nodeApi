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

router.post("/login", async (req, res) => {
  try {
    res.json({
      response: [
        {
          adminRoleId: 1,
          userId: 2,
          accessClientIds: "1",
          clientRoleId: 2,
        },
      ],
      httpStatusCode: "201",
      errorCode: "201",
      errorMessage: "Login Successfully",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/module", async (req, res) => {
  try {
    res.json({
      response: [
        {
          name: "Dashboard",
          icon: "dashboard",
          routePath:"/dashboard"
        },
        {
          name: "Customer Segment",
          icon: "segment",
          routePath:"/customerSegment"
        },
        {
          name: "Product Content",
          icon: "content",
          routePath:"/productContentList"
        },
        {
          name: "Product Section",
          icon: "section",
          routePath:"/productSection"
        },
        {
          name: "Add Coupon",
          icon: "Add",
          routePath:"/addCoupon"
        },
        {
          name: "Add bulk coupon",
          icon: "bulk",
          routePath:"/addBulkCoupon"
        },
        {
          name: "Dynamic coupon",
          icon: "Dynamic",
          routePath:"/dynamicCoupon"
        },
        {
          name: "Coupon List",
          icon: "list",
          routePath:"/couponList"
        },
        {
          name: "Category Master",
          icon: "2Category",
          routePath:"/categoryMaster"
        },
        {
          name: "Deal Management",
          icon: "Deal",
          routePath:"/dealManagement"
        },
        {
          name: "Deal List",
          icon: "Deal",
          routePath:"/dealList"
        },
        {
          name: "Deal To Segment",
          icon: "customer2",
          routePath:"/dealToSegment"
        },
        {
          name: "Campaign Master",
          icon: "master",
          routePath:"/compaignMaster"
        },
      ],
      httpStatusCode: "201",
      errorCode: "201",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/customerSegment", async (req, res) => {
  try {
    res.json({
      response: [
        {
          id: "#7899",
          segmentName: "non-banner",
          currentStatus: "Non-Active",
          date: "15/2/2024",
        },
        {
          id: "#5677",
          segmentName: "Header",
          currentStatus: "Non-Active",
          date: "14/2/2024",
        },
        {
          id: "#5678",
          segmentName: "Supplier 3",
          currentStatus: "Non-Active",
          date: "13/2/2024",
        },
        {
          id: "#4567",
          segmentName: "Top Banner",
          currentStatus: "Non-Active",
          date: "12/2/2024",
        },
        {
          id: "#7899",
          segmentName: "non-banner",
          currentStatus: "Non-Active",
          date: "15/2/2024",
        },
        {
          id: "#5677",
          segmentName: "Header",
          currentStatus: "Non-Active",
          date: "14/2/2024",
        },
        {
          id: "#5678",
          segmentName: "Supplier 3",
          currentStatus: "Non-Active",
          date: "13/2/2024",
        },
        {
          id: "#4567",
          segmentName: "Top Banner",
          currentStatus: "Non-Active",
          date: "12/2/2024",
        },
      ],
      httpStatusCode: "201",
      errorCode: "201",
      errorMessage: "",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/productContent", async (req, res) => {
  try {
    res.json({
      response: [
        {
          productName: "Amazon",
          typeOfProduct: "Gift Cards",
          category: "Amazon",
          id: "#5567",
          dealUnlock:"Yes",
          Points:"098",
          Price:"2300",
          Link:"profile",
          image:"image",
          Status:true,
          date:"15/02/2024"
        },
        {
          productName: "Filpkart",
          typeOfProduct: "Ear buds",
          category: "Flipcart",
          id: "#45677",
          dealUnlock:"No",
          Points:"903",
          Price:"2345",
          Link:"profile",
          image:"image",
          Status:false,
          date:"14/02/2024"
        },
        {
          productName: "Meesho",
          typeOfProduct: "Mobile",
          category: "Grocery",
          id: "#4567",
          dealUnlock:"Yes",
          Points:"364",
          Price:"3400",
          Link:"profile",
          image:"image",
          Status:false,
          date:"13/6/2024"
        },
        {
          productName: "Snapdeal",
          typeOfProduct: "Smart watch",
          category: "Electronics",
          id: "#4576",
          dealUnlock:"Yes",
          Points:"845",
          Price:"4589",
          Link:"profile",
          image:"image",
          Status:true,
          date:"12/03/2024"
        },
        {
          productName: "Amazon",
          typeOfProduct: "Gift Cards",
          category: "Amazon",
          id: "#5567",
          dealUnlock:"Yes",
          Points:"098",
          Price:"2300",
          Link:"profile",
          image:"image",
          Status:false,
          date:"15/04/2024"
        },
        {
          productName: "Filpkart",
          typeOfProduct: "Earbuds",
          category: "Flipcart",
          id: "#45677",
          dealUnlock:"No",
          Points:"903",
          Price:"2345",
          Link:"profile",
          image:"image",
          Status:true,
          date:"14/05/2024"
        },
        {
          productName: "Meesho",
          typeOfProduct: "Mobile",
          category: "Grocery",
          id: "#4567",
          dealUnlock:"Yes",
          Points:"364",
          Price:"3400",
          Link:"profile",
          image:"image",
          Status:true,
          date:"13/02/2024"
        },
        {
          productName: "Snapdeal",
          typeOfProduct: "Smart watch",
          category: "Electronics",
          id: "#4576",
          dealUnlock:"Yes",
          Points:"845",
          Price:"4589",
          Link:"profile",
          image:"image",
          Status:false,
          date:"12/03/2024"
        },
      ],
      httpStatusCode: "201",
      errorCode: "201",
      errorMessage: "",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.post("/postProductSection", async (req, res) => {
  try {
    res.json({
      response: [
        {
          adminRoleId: 1,
          userId: 2,
          accessClientIds: "1",
          clientRoleId: 2,
        },
      ],
      httpStatusCode: "201",
      errorCode: "201",
      errorMessage: "Submitted Successfully",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getProductSection", async (req, res) => {
  try {
    res.json({
      response: [
        {
          name: "Bags, Wallets and Luggage",
          date: "23/3/2024",
          currentStatus: true,
        },
        {
          name: "Clothing & Accessories",
          date: "23/3/2024",
          currentStatus: false,
        },
        {
          name: "Beauty",
          date: "23/3/2024",
          currentStatus: true,
        },
        {
          name: "Bags, Wallets and Luggage",
          date: "23/3/2024",
          currentStatus: true,
        },
        {
          name: "Clothing & Accessories",
          date: "23/3/2024",
          currentStatus: false,
        },
        {
          name: "Beauty",
          date: "23/3/2024",
          currentStatus: true,
        },  {
          name: "Bags, Wallets and Luggage",
          date: "23/3/2024",
          currentStatus: true,
        }
      ],
      httpStatusCode: "201",
      errorCode: "201",
      errorMessage: "gfdh",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/roleMaster", async (req, res) => {
  try {
    res.json({
      response: [
        {
          adminRoleId: 1,
          userId: 2,
          accessClientIds: "1",
          clientRoleId: 2,
        },
      ],
      httpStatusCode: "201",
      errorCode: "201",
      errorMessage: "Submitted Successfully",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getRoleMaster", async (req, res) => {
  try {
    res.json({
      response: [
        {
          name: "Client Role",
          module:"Dashboard"
        },
        {
          name: "Admin Role",
          module:"Product Section"
        }
      ],
      httpStatusCode: "201",
      errorCode: "201",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/clientMaster", async (req, res) => {
  try {
    res.json({
      response: [
        {
          adminRoleId: 1,
          userId: 2,
          accessClientIds: "1",
          clientRoleId: 2,
        },
      ],
      httpStatusCode: "201",
      errorCode: "201",
      errorMessage: "Added Successfully",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
