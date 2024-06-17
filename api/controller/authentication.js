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
          email: "demo@gmail.com",
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
        {
          name: "Role Master",
          icon: "master",
          routePath:"/roleMaster"
        },
        {
          name: "Client Master",
          icon: "master",
          routePath:"/clientMaster"
        },{
          name: "User Master",
          icon: "master",
          routePath:"/UserMaster"
        }
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
      errorCode: "201"
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
          sectionName: "Bags, Wallets and Luggage",
          status: true,
          date: "15/06,2024"
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
          roleName: "Admin Role",
          Description: "",
          accessModules: ["Dashboard","Product Content","Product Section"]
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
          name: "Sumit kumar",
          number:"8791711111",
          email:"sumitji@gmail.com",
          domainUrl:"https://qa-cc-admin.giftstacc.com/lc-admin/client-master",
          status:true,
          color:"black",
          logoLink:"favicon.png",
          theme:"Theme 1"
        }
      ],
      httpStatusCode: "201",
      errorCode: "201",
      errorMessage: "Added Successfully",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getClientMaster", async (req, res) => {
  try {
    res.json({
      response: [
        {
          name: "Sumit kumar",
          number:"8791711111",
          email:"sumitji@gmail.com",
          id:"1",
          status:true,

        },
         {
          name: "Ankita",
          number:"8791456723",
          email:"ankita@gmail.com",
          id:"4",
          status:false,
          
        },
      ],
      httpStatusCode: "201",
      errorCode: "201",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.post("/userMaster", async (req, res) => {
  try {
    res.json({
      response: [
        {
          roleName: "Client Role",
          email:"sumitji@gmail.com",
          number:"8791711111",
          name: "Ankita Singh",
          client:"Sumit kumar"
        }
      ],
      httpStatusCode: "201",
      errorCode: "201",
      errorMessage: "Submitted Successfully",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/getUserMaster", async (req, res) => {
  try {
    res.json({
      response: [
        {
          roleName: "Client Role",
          email:"sumitji@gmail.com",
          number:"8791711111",
          name: "username",
          client:"Sumit kumar"
        },
        {
          roleName: "Wert Role",
          email:"abc@gmail.com",
          number:"9879175671",
          name: "dfghj",
          client:"clientname"
        },
        {
          roleName: "Client Role",
          email:"sumitkumar@gmail.com",
          number:"3214567890",
          name: "abc02",
          client:"Sumit kumar"
        }
      ],
      httpStatusCode: "201",
      errorCode: "201",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.post("/addCoupon", async (req, res) => {
  try {
    res.json({
      response: [
        {
          offer: "offers",
          couponcode: "ADFH234",
          typeOfCoupon: "Static Coupon",
          image: "favicon.png",
          date:"30/07/2024"
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
module.exports = router;
