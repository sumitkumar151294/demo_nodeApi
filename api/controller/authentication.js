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
          accessClientIds: "1",
          adminRoleId : 14,
          clientRoleId: 2,
          userId: 2
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
          id:1,
          name: "Dashboard",
          icon: "dashboard",
          routePath:"/dashboard"
        },
        {
          id:2,
          name: "Customer Segment",
          icon: "segment",
          routePath:"/customerSegment"
        },
        {
          id:3,
          name: "Product Content",
          icon: "content",
          routePath:"/productContentList"
        },
        {
          id:4,
          name: "Product Section",
          icon: "section",
          routePath:"/productSection"
        },
        {
          id:5,
          name: "Add Coupon",
          icon: "Add",
          routePath:"/addCoupon"
        },
        {
          id:6,
          name: "Add Bulk Coupon",
          icon: "bulk",
          routePath:"/addBulkCoupon"
        },
        {
          id:7,
          name: "Dynamic Coupon",
          icon: "Dynamic",
          routePath:"/dynamicCoupon"
        },
        {
          id:8,
          name: "Coupon List",
          icon: "list",
          routePath:"/couponList"
        },
        {
          id:9,
          name: "Category Master",
          icon: "2Category",
          routePath:"/categoryMaster"
        },
        {
          id:10,
          name: "Deal Management",
          icon: "Deal",
          routePath:"/dealManagement"
        },
        {
          id:11,
          name: "Deal List",
          icon: "Deal",
          routePath:"/dealList"
        },
        {
          id:12,
          name: "Deal To Segment",
          icon: "customer2",
          routePath:"/dealToSegment"
        },
        {
          id:13,
          name: "Campaign Master",
          icon: "master",
          routePath:"/compaignMaster"
        },
        {
          id:14,
          name: "Role Master",
          icon: "roleMaster",
          routePath:"/roleMaster"
        },
        {
          id:15,
          name: "Client Master",
          icon: "clientMaster",
          routePath:"/clientMaster"
        },{
          id:16,
          name: "User Master",
          icon: "userMaster",
          routePath:"/userMaster"
        }
      ],
      httpStatusCode: "200",
      errorCode: "200",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/user-role-module-access", async (req, res) => {
  try {
    res.json({
      response: [
        {
          id:1,
          roleId: 14,
          moduleId: 1,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:2,
          roleId: 14,
          moduleId: 2,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:3,
          roleId: 14,
          moduleId: 3,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:4,
          roleId: 14,
          moduleId: 4,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:5,
          roleId: 14,
          moduleId: 5,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:6,
          roleId: 14,
          moduleId: 6,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:7,
          roleId: 14,
          moduleId: 7,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:8,
          roleId: 14,
          moduleId: 8,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:9,
          roleId: 14,
          moduleId: 9,
          viewAccess: false,
          addAccess: false,
          editAccess: false,
        },
        {
          id:10,
          roleId: 14,
          moduleId: 10,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:11,
          roleId: 14,
          moduleId: 11,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:12,
          roleId: 14,
          moduleId: 12,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:13,
          roleId: 14,
          moduleId: 13,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:14,
          roleId: 14,
          moduleId: 14,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:15,
          roleId: 14,
          moduleId: 15,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },{
          id:16,
          roleId: 14,
          moduleId: 16,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        }
      ],
      httpStatusCode: "200",
      errorCode: "200",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.put("/user-role-module-access", async (req, res) => {
  try {
    res.json({
      response: [
        {
          id:1,
          roleId: 14,
          moduleId: 1,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:2,
          roleId: 14,
          moduleId: 2,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:3,
          roleId: 14,
          moduleId: 3,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:4,
          roleId: 14,
          moduleId: 4,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:5,
          roleId: 14,
          moduleId: 5,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:6,
          roleId: 14,
          moduleId: 6,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:7,
          roleId: 14,
          moduleId: 7,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:8,
          roleId: 14,
          moduleId: 8,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:9,
          roleId: 14,
          moduleId: 9,
          viewAccess: false,
          addAccess: false,
          editAccess: false,
        },
        {
          id:10,
          roleId: 14,
          moduleId: 10,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:11,
          roleId: 14,
          moduleId: 11,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:12,
          roleId: 14,
          moduleId: 12,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:13,
          roleId: 14,
          moduleId: 13,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:14,
          roleId: 14,
          moduleId: 14,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },
        {
          id:15,
          roleId: 14,
          moduleId: 15,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
        },{
          id:16,
          roleId: 14,
          moduleId: 16,
          viewAccess: true,
          addAccess: true,
          editAccess: true,
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
      httpStatusCode: "200",
      errorCode: "200",
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
      httpStatusCode: "200",
      errorCode: "200"
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
      httpStatusCode: "200",
      errorCode: "200",
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
          roleId: "43",
        },
      ],
      httpStatusCode: "201",
      errorCode: "201",
      errorMessage: "Created Successfully",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/user-role-module-access", async (req, res) => {
  try {
    res.json({
      httpStatusCode: "201",
      errorCode: "201",
      errorMessage: "Created Successfully",
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
          id:11,
          name: "Client Role",
          modules:["Dashboard","Customer Segment"]
        },
        {
          id:14,
          name: "Admin Role",
          modules:["Dashboard","Customer Segment","Product Content List","Product Section","Add Coupon","Add Bulk Coupon", "Dynamic Coupon","Coupon List","Category List","Category Master","Deal Management","Deal List","Deal To Segment","Compaign Master","Role Master","Client Master","User Master"]
        }
      ],
      httpStatusCode: "200",
      errorCode: "200",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.put("/roleMaster", async (req, res) => {
  try {
    res.json({
      response: [
        {
          id:11,
          name: "Client Role",
          modules:["Dashboard","Customer Segment"]
        },
        {
          id:14,
          name: "Admin Role",
          modules:["Dashboard","Customer Segment","Product Content List","Product Section","Add Coupon","Add Bulk Coupon", "Dynamic Coupon","Coupon List","Category List","Category Master","Deal Management","Deal List","Deal To Segment","Compaign Master","Role Master","Client Master","User Master"]
        }
      ],
      httpStatusCode: "201",
      errorCode: "201",
      errorMessage: "Updated Successfully",
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
          id:"86"
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

router.get("/getClientMaster", async (req, res) => {
  try {
    res.json({
      response: [
        {
          contactName: "Sumit kumar",
          contactNumber:"8791711111",
          contactEmail:"sumitji@gmail.com",
          id:1,
          status:"true",
          contactplatformDomainUrl: "https://www.w3schools.com/",
          dbName: "dfghjk",
          ipAddress: "13.232.112.223d",
          logo: "https://www.w3schools.com/",
          password: "dsfghgjhkj",
          theme: "Theme 2",
          username: "anu"
        },
         {
          contactName: "Ankita",
          contactNumber:"8791456723",
          contactEmail:"ankita@gmail.com",
          id:4,
          status:"false",
          contactplatformDomainUrl: "https://www.w3schools.com/",
          dbName: "dfghjk",
          ipAddress: "13.232.112.223d",
          logo: "https://www.w3schools.com/",
          password: "dsfghgjhkj",
          theme: "Theme 2",
          username: "anu"
        },
      ],
      httpStatusCode: "200",
      errorCode: "200",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.put("/clientMaster", async (req, res) => {
  try {
    res.json({
      response: [
        {
          name: "Sumit kumar",
          number:"8791711111",
          email:"sumitji@gmail.com",
          id:1,
          status:true,

        },
         {
          name: "Ankita",
          number:"8791456723",
          email:"ankita@gmail.com",
          id:4,
          status:false,
          
        },
      ],
      httpStatusCode: "201",
      errorCode: "201",
      errorMessage: "Updatted Successfully",
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
      httpStatusCode: "200",
      errorCode: "200",
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
          date:"30/07/2024",
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

// router.post("/generate-auth-token", async (req, res) => {
//   try {
//     res.json({
//        response: [
//         {
//             clientId: "0",
//             token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAiLCJwYXJ0bmVyLWNvZGUiOiJVSUFkbWluIiwianRpIjoiN2FmNjYyNmYtYjAxOS00NDZiLWIzZWEtMzEzNTY4ODliNTJkIiwiZXhwIjoxNzE4NzAwNDE2LCJpc3MiOiJhYmMiLCJhdWQiOiJ2ZGZzZ2Rmc2dfR0ZzZGZnX0dGRFNnX0dGZHNmR19ERlNHR1NERlNERkdfZ19Hc2RmR19TZGZHX0RoR0ZIX2dmIn0.nkRKUpcEJUHxfKAYwinqmf3ltjVtGwhZ8jK-Z90qN2U",
//             expiryTime: "2024-06-18T08:46:56.12469Z"
//         }
//       ],
//       httpStatusCode: "200",
//       errorCode: "200",
//       errorMessage: "",
//     });
//   } catch (err) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
router.get("/translation-content-get-by-clientid", async (req, res) => {
  try {
    res.json({
      response: [
               {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "edit",
                  "resourceValue": "Edit",
                  "lang": "En",
                  "id": 1
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "email_label",
                  "resourceValue": "Email",
                  "lang": "En",
                  "id": 2
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "email_placeholder",
                  "resourceValue": "abc@gmail.com",
                  "lang": "En",
                  "id": 3
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "password_label",
                  "resourceValue": "Password",
                  "lang": "En",
                  "id": 4
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "password_placeholder",
                  "resourceValue": "your password",
                  "lang": "En",
                  "id": 5
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "logo",
                  "resourceValue": "https://beta.shop-loyalty.com/images/logo.png",
                  "lang": "En",
                  "id": 6
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "sign",
                  "resourceValue": "Sign into your account",
                  "lang": "En",
                  "id": 11
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "req_field",
                  "resourceValue": "All the * fields are required.",
                  "lang": "En",
                  "id": 12
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "remember",
                  "resourceValue": "Remember my preference",
                  "lang": "En",
                  "id": 13
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "sign_me",
                  "resourceValue": "Sign In Me",
                  "lang": "En",
                  "id": 14
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "client_master_label",
                  "resourceValue": "Client Master",
                  "lang": "En",
                  "id": 17
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "contact_Name_label",
                  "resourceValue": "Contact Name",
                  "lang": "En",
                  "id": 18
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "contact_Number_label",
                  "resourceValue": "Contact Number",
                  "lang": "En",
                  "id": 19
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "IP Address_label",
                  "resourceValue": "Database IP Address",
                  "lang": "En",
                  "id": 20
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "usernamee_label",
                  "resourceValue": "Username",
                  "lang": "En",
                  "id": 21
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "Status_label",
                  "resourceValue": "Status",
                  "lang": "En",
                  "id": 23
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "Color_label",
                  "resourceValue": "Color",
                  "lang": "En",
                  "id": 24
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "Logo Link_label",
                  "resourceValue": "Logo Link",
                  "lang": "En",
                  "id": 25
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "Select Theme_label",
                  "resourceValue": "Select Theme",
                  "lang": "En",
                  "id": 26
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "razorpay Payment Gateway_label",
                  "resourceValue": "Razorpay Payment Gateway",
                  "lang": "En",
                  "id": 27
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "staging_label",
                  "resourceValue": "Staging",
                  "lang": "En",
                  "id": 28
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "key_placeholder",
                  "resourceValue": "Key",
                  "lang": "En",
                  "id": 29
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "secretkey_placeholder",
                  "resourceValue": "Secret Key",
                  "lang": "En",
                  "id": 30
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "production_key_label",
                  "resourceValue": "Production",
                  "lang": "En",
                  "id": 31
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "add_label",
                  "resourceValue": "Add",
                  "lang": "En",
                  "id": 32
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "client List_label",
                  "resourceValue": "Client List",
                  "lang": "En",
                  "id": 33
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "search_here_label",
                  "resourceValue": "Search here......",
                  "lang": "En",
                  "id": 34
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "export_label",
                  "resourceValue": "export",
                  "lang": "En",
                  "id": 35
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "client ID_label",
                  "resourceValue": "Client ID",
                  "lang": "En",
                  "id": 36
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "action_label",
                  "resourceValue": "Action",
                  "lang": "En",
                  "id": 37
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "login_label",
                  "resourceValue": "Login",
                  "lang": "En",
                  "id": 38
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "ipAddress",
                  "resourceValue": "IP Address",
                  "lang": "En",
                  "id": 39
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "contact_Email_label",
                  "resourceValue": "Contact Email",
                  "lang": "En",
                  "id": 41
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "select_Option",
                  "resourceValue": "Selected Option:",
                  "lang": "En",
                  "id": 42
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "technical_issue",
                  "resourceValue": "We have some technical issue",
                  "lang": "En",
                  "id": 43
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "contact_Admin",
                  "resourceValue": "Please check in sometime or contact administrator",
                  "lang": "En",
                  "id": 44
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "invalid_Email",
                  "resourceValue": "Invalid email address",
                  "lang": "En",
                  "id": 45
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "user_Master_label",
                  "resourceValue": "User Master",
                  "lang": "En",
                  "id": 46
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "User_list_label",
                  "resourceValue": "User list",
                  "lang": "En",
                  "id": 47
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "mobile_label",
                  "resourceValue": "Mobile",
                  "lang": "En",
                  "id": 48
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "role_label",
                  "resourceValue": "Role",
                  "lang": "En",
                  "id": 49
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "client_label",
                  "resourceValue": "Client",
                  "lang": "En",
                  "id": 50
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "required_label",
                  "resourceValue": "All the * fields are required.",
                  "lang": "En",
                  "id": 51
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "submit_label",
                  "resourceValue": "Submit",
                  "lang": "En",
                  "id": 52
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "role_name_label",
                  "resourceValue": "Role Name",
                  "lang": "En",
                  "id": 53
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "clients_name_label",
                  "resourceValue": "Clients",
                  "lang": "En",
                  "id": 54
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "update_label",
                  "resourceValue": "Update",
                  "lang": "En",
                  "id": 55
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "number_Digit_Label",
                  "resourceValue": "Please enter 10 digit only",
                  "lang": "En",
                  "id": 56
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "RoleMaster",
                  "resourceValue": "ROle Master",
                  "lang": "En",
                  "id": 58
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "role-master",
                  "resourceValue": "Role Master",
                  "lang": "En",
                  "id": 59
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "role-name",
                  "resourceValue": "Role Name",
                  "lang": "En",
                  "id": 60
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "select-all",
                  "resourceValue": "SelectAll",
                  "lang": "En",
                  "id": 61
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "selectall",
                  "resourceValue": "Select All",
                  "lang": "En",
                  "id": 62
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "module-access",
                  "resourceValue": "Module Access",
                  "lang": "En",
                  "id": 63
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "role-module-access-list",
                  "resourceValue": "Role Module Access List",
                  "lang": "En",
                  "id": 64
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "first-name",
                  "resourceValue": "First Name",
                  "lang": "En",
                  "id": 65
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "last-name",
                  "resourceValue": "Last Name",
                  "lang": "En",
                  "id": 66
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "modules",
                  "resourceValue": "Modules",
                  "lang": "En",
                  "id": 67
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "action",
                  "resourceValue": "Action",
                  "lang": "En",
                  "id": 68
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "submit",
                  "resourceValue": "Submit",
                  "lang": "En",
                  "id": 69
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "supplierMaster",
                  "resourceValue": "Supplier Master",
                  "lang": "En",
                  "id": 70
              },
              {
                "clientId": "0",
                "resourceType": "UIMasterAdmin",
                "resourceKey": "view",
                "resourceValue": "View",
                "lang": "En",
                "id": 235
            },
            {
                "clientId": "0",
                "resourceType": "UIMasterAdmin",
                "resourceKey": "add",
                "resourceValue": "Add",
                "lang": "En",
                "id": 236
            },
            {
                "clientId": "0",
                "resourceType": "UIMasterAdmin",
                "resourceKey": "description",
                "resourceValue": "Description",
                "lang": "EN",
                "id": 238
            },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "supplierClientID",
                  "resourceValue": "Supplier Client ID",
                  "lang": "En",
                  "id": 72
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "supplierClientSecret",
                  "resourceValue": "Supplier Client Secret",
                  "lang": "En",
                  "id": 73
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "endPoint",
                  "resourceValue": "End Point",
                  "lang": "En",
                  "id": 74
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "select",
                  "resourceValue": "Select",
                  "lang": "En",
                  "id": 75
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "active",
                  "resourceValue": "Active",
                  "lang": "En",
                  "id": 76
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "nonActive",
                  "resourceValue": "Non-Active",
                  "lang": "En",
                  "id": 77
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "authorizationCode",
                  "resourceValue": "Authorization Code",
                  "lang": "En",
                  "id": 78
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "minThresholdAmount",
                  "resourceValue": "Min. Threshold Amount",
                  "lang": "En",
                  "id": 79
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "customerSegment",
                  "resourceValue": "Customer Segment",
                  "lang": "En",
                  "id": 80
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "id",
                  "resourceValue": "ID",
                  "lang": "En",
                  "id": 81
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "segmentName",
                  "resourceValue": "Segment Name",
                  "lang": "En",
                  "id": 82
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "currentStatus",
                  "resourceValue": "Current Status",
                  "lang": "En",
                  "id": 83
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "date",
                  "resourceValue": "Date",
                  "lang": "En",
                  "id": 84
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "productContentList",
                  "resourceValue": "Product Content List",
                  "lang": "En",
                  "id": 85
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "productName",
                  "resourceValue": "Product Name",
                  "lang": "En",
                  "id": 86
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "typeOfProduct",
                  "resourceValue": "Type Of Product",
                  "lang": "En",
                  "id": 87
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "Supplier_List_Label",
                  "resourceValue": "Supplier List",
                  "lang": "En",
                  "id": 88
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "supplierBrands",
                  "resourceValue": "Supplier Brands",
                  "lang": "En",
                  "id": 89
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "selectSuppliers",
                  "resourceValue": "Select Suppliers",
                  "lang": "En",
                  "id": 90
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "all",
                  "resourceValue": "All",
                  "lang": "En",
                  "id": 91
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "supplierBrandLists",
                  "resourceValue": "Supplier Brand Lists",
                  "lang": "En",
                  "id": 92
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "id",
                  "resourceValue": "ID",
                  "lang": "En",
                  "id": 93
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "brands",
                  "resourceValue": "Brands",
                  "lang": "En",
                  "id": 94
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "supplierMargin",
                  "resourceValue": "Supplier Margin%",
                  "lang": "En",
                  "id": 95
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "createUpdateBrandMapping",
                  "resourceValue": "Create Category",
                  "lang": "En",
                  "id": 96
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "category",
                  "resourceValue": "Category",
                  "lang": "En",
                  "id": 97
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "dealUnlock",
                  "resourceValue": "Deal Unlock",
                  "lang": "En",
                  "id": 98
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "selectStatus",
                  "resourceValue": "Select Status",
                  "lang": "En",
                  "id": 99
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "logout",
                  "resourceValue": "Logout",
                  "lang": "En",
                  "id": 100
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "inActive",
                  "resourceValue": "In-Active",
                  "lang": "En",
                  "id": 101
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "points",
                  "resourceValue": "Points",
                  "lang": "En",
                  "id": 102
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "products",
                  "resourceValue": "Products",
                  "lang": "En",
                  "id": 103
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "customers",
                  "resourceValue": "Customers",
                  "lang": "En",
                  "id": 105
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "price",
                  "resourceValue": "Price",
                  "lang": "En",
                  "id": 106
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "link_label",
                  "resourceValue": "Link",
                  "lang": "En",
                  "id": 107
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "image",
                  "resourceValue": "Image",
                  "lang": "En",
                  "id": 108
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "months",
                  "resourceValue": "Monthly",
                  "lang": "En",
                  "id": 109
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "daily",
                  "resourceValue": "Daily",
                  "lang": "En",
                  "id": 110
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "today",
                  "resourceValue": "Today",
                  "lang": "En",
                  "id": 111
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "field_Name_Label",
                  "resourceValue": "Field Name",
                  "lang": "En",
                  "id": 112
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "field_Value_Label",
                  "resourceValue": "Field Value",
                  "lang": "En",
                  "id": 113
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "mode_Label",
                  "resourceValue": "Mode",
                  "lang": "En",
                  "id": 114
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "database_User_ID_Label",
                  "resourceValue": "Database User ID",
                  "lang": "En",
                  "id": 115
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "database_User_Pass_Label",
                  "resourceValue": " Database User Password",
                  "lang": "En",
                  "id": 116
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "categoryList",
                  "resourceValue": "Category List",
                  "lang": "En",
                  "id": 117
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "Theme Details_Label",
                  "resourceValue": " Theme Details",
                  "lang": "En",
                  "id": 118
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": " Database Credentials_Label",
                  "resourceValue": "Database Credentials",
                  "lang": "En",
                  "id": 119
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "Theme_Details_Label",
                  "resourceValue": " Theme Details",
                  "lang": "En",
                  "id": 120
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": " Database_Credentials_Label",
                  "resourceValue": "Database_Credentials",
                  "lang": "En",
                  "id": 121
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": " Database_Label",
                  "resourceValue": "Database Credentials",
                  "lang": "En",
                  "id": 125
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "heading",
                  "resourceValue": "Brand Catalogue",
                  "lang": "En",
                  "id": 126
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "headingbrandcatalogue",
                  "resourceValue": "Brand Catalogue",
                  "lang": "En",
                  "id": 128
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "brandname1",
                  "resourceValue": "Amazon",
                  "lang": "En",
                  "id": 129
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "image",
                  "resourceValue": "Image",
                  "lang": "En",
                  "id": 130
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "sku",
                  "resourceValue": "SKU",
                  "lang": "En",
                  "id": 131
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "name",
                  "resourceValue": "Name",
                  "lang": "En",
                  "id": 132
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "minprice",
                  "resourceValue": "Min Price",
                  "lang": "En",
                  "id": 133
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "maxprice",
                  "resourceValue": "Max Price",
                  "lang": "En",
                  "id": 134
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "price",
                  "resourceValue": "Price",
                  "lang": "En",
                  "id": 135
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "type",
                  "resourceValue": "Type",
                  "lang": "En",
                  "id": 136
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "pricerange",
                  "resourceValue": "Price Range",
                  "lang": "En",
                  "id": 137
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "pricedenominations",
                  "resourceValue": "Price Denominations",
                  "lang": "En",
                  "id": 138
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "termsandconditions",
                  "resourceValue": "*Terms and Conditions",
                  "lang": "En",
                  "id": 139
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "storelocator",
                  "resourceValue": "*Store Locator",
                  "lang": "En",
                  "id": 140
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "supplier",
                  "resourceValue": "Supplier",
                  "lang": "En",
                  "id": 141
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "client",
                  "resourceValue": "Client",
                  "lang": "En",
                  "id": 142
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "date",
                  "resourceValue": "Date",
                  "lang": "En",
                  "id": 143
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "ordersupplier",
                  "resourceValue": "Supplier",
                  "lang": "En",
                  "id": 144
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "db_name",
                  "resourceValue": "Database Name",
                  "lang": "En",
                  "id": 145
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "platform_Domain_Url",
                  "resourceValue": "Platform Domain Url",
                  "lang": "En",
                  "id": 146
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "statusWise",
                  "resourceValue": "Status Wise",
                  "lang": "En",
                  "id": 147
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "sortedBy",
                  "resourceValue": "Sorted by",
                  "lang": "En",
                  "id": 148
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "ordermarginvalue",
                  "resourceValue": "Total Margin Value",
                  "lang": "En",
                  "id": 149
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "no_record_found",
                  "resourceValue": "No Record Found",
                  "lang": "En",
                  "id": 150
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "productSectionList",
                  "resourceValue": "Product Section List",
                  "lang": "En",
                  "id": 151
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "no_record_available",
                  "resourceValue": "Record not available",
                  "lang": "En",
                  "id": 152
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "productSection",
                  "resourceValue": "Product Section",
                  "lang": "En",
                  "id": 153
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "required-field",
                  "resourceValue": "*",
                  "lang": "En",
                  "id": 154
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "checkbox_error",
                  "resourceValue": "At least one module must be selected.",
                  "lang": "En",
                  "id": 155
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "sectionName",
                  "resourceValue": "Section Name",
                  "lang": "En",
                  "id": 156
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "brand_Detail",
                  "resourceValue": "Brand Detail",
                  "lang": "En",
                  "id": 157
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "action",
                  "resourceValue": "Action",
                  "lang": "En",
                  "id": 158
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "admin_Label",
                  "resourceValue": "Admin",
                  "lang": "En",
                  "id": 159
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "failedordersid",
                  "resourceValue": "Order ID",
                  "lang": "En",
                  "id": 160
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "failedordersname",
                  "resourceValue": "Name",
                  "lang": "En",
                  "id": 161
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "failedordersemail",
                  "resourceValue": "Email",
                  "lang": "En",
                  "id": 162
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "failedordersmobile",
                  "resourceValue": "Mobile",
                  "lang": "En",
                  "id": 163
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "failedorderscartvalue",
                  "resourceValue": "Total Cart Value",
                  "lang": "En",
                  "id": 164
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "addCoupon",
                  "resourceValue": "Add Coupon",
                  "lang": "En",
                  "id": 165
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "failedordersdate",
                  "resourceValue": "Date of Order",
                  "lang": "En",
                  "id": 166
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "failedordersorderamount",
                  "resourceValue": "Total Order Amount",
                  "lang": "En",
                  "id": 167
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "failedorderspaymentid",
                  "resourceValue": "Payment ID",
                  "lang": "En",
                  "id": 168
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "balance_Available",
                  "resourceValue": "Balance Available Amount",
                  "lang": "En",
                  "id": 169
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "failedorderspoints",
                  "resourceValue": "Points Redeemed",
                  "lang": "En",
                  "id": 170
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "sign_me_label",
                  "resourceValue": "Sign Me In",
                  "lang": "En",
                  "id": 171
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "failedorderssno",
                  "resourceValue": "S.NO",
                  "lang": "En",
                  "id": 172
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "supplier_API",
                  "resourceValue": "Supplier API Details",
                  "lang": "En",
                  "id": 173
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "failedordersbrandname",
                  "resourceValue": "Brand Name",
                  "lang": "En",
                  "id": 174
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "failedordersfacevalue",
                  "resourceValue": "Face Value",
                  "lang": "En",
                  "id": 175
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "failedordersqty",
                  "resourceValue": "QTY",
                  "lang": "En",
                  "id": 176
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "failedorderssku",
                  "resourceValue": "SKU",
                  "lang": "En",
                  "id": 177
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "add_More",
                  "resourceValue": "Add More",
                  "lang": "En",
                  "id": 178
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "failedordersdisamount",
                  "resourceValue": "Discounted Amt.",
                  "lang": "En",
                  "id": 179
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "failedorderssuborderid",
                  "resourceValue": "Suborder ID",
                  "lang": "En",
                  "id": 180
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "failedordersreferenceid",
                  "resourceValue": "Reference ID",
                  "lang": "En",
                  "id": 181
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "failedorderssuborderstatus",
                  "resourceValue": "Sub-Order Status",
                  "lang": "En",
                  "id": 182
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "failedordersamount",
                  "resourceValue": "Amount",
                  "lang": "En",
                  "id": 183
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "delete",
                  "resourceValue": "Delete",
                  "lang": "En",
                  "id": 184
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "delete_Button",
                  "resourceValue": "Delete",
                  "lang": "En",
                  "id": 185
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "is_Client_role",
                  "resourceValue": "Is Client Role",
                  "lang": "En",
                  "id": 186
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "customerlist",
                  "resourceValue": "Customer List",
                  "lang": "En",
                  "id": 187
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "customerlistname",
                  "resourceValue": "Name",
                  "lang": "En",
                  "id": 188
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "customerlistemail",
                  "resourceValue": "Email",
                  "lang": "En",
                  "id": 189
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "customerlistphone",
                  "resourceValue": "Phone",
                  "lang": "En",
                  "id": 190
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "customerlistjoined",
                  "resourceValue": "Joined",
                  "lang": "En",
                  "id": 191
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "emaileventmaster",
                  "resourceValue": "Email Event Master",
                  "lang": "En",
                  "id": 192
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "emaileventmastername",
                  "resourceValue": "Event Name",
                  "lang": "En",
                  "id": 193
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "emaileventmastersms",
                  "resourceValue": "SMS Body",
                  "lang": "En",
                  "id": 194
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "emaileventmastersubject",
                  "resourceValue": "Subject",
                  "lang": "En",
                  "id": 195
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "emaileventmastermail",
                  "resourceValue": "Mail Body",
                  "lang": "En",
                  "id": 196
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "emaileventmasterkeywords",
                  "resourceValue": "Keywords",
                  "lang": "En",
                  "id": 197
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "emaileventmastersno",
                  "resourceValue": "S.NO",
                  "lang": "En",
                  "id": 198
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "emaileventmasteraction",
                  "resourceValue": "Action",
                  "lang": "En",
                  "id": 199
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "emaileventmasterdate",
                  "resourceValue": "Date",
                  "lang": "En",
                  "id": 200
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "role_Create_Label",
                  "resourceValue": "Role created successfully",
                  "lang": "En",
                  "id": 201
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "role_Updated_Label",
                  "resourceValue": "Role updated successfully",
                  "lang": "En",
                  "id": 202
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "graph_Data_Label",
                  "resourceValue": "Graph data is based on full system manners",
                  "lang": "En",
                  "id": 203
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "day_Label",
                  "resourceValue": "than last day",
                  "lang": "En",
                  "id": 204
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "role_Req_Label",
                  "resourceValue": "Role Name is required.",
                  "lang": "En",
                  "id": 205
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "category_deleted",
                  "resourceValue": "Category Deleted Successfully",
                  "lang": "En",
                  "id": 206
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "not_Found",
                  "resourceValue": "Not Found",
                  "lang": "En",
                  "id": 207
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "select_role",
                  "resourceValue": "Please select a role",
                  "lang": "En",
                  "id": 208
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "select_Client",
                  "resourceValue": "Please select a client",
                  "lang": "En",
                  "id": 209
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "supplier_products",
                  "resourceValue": "Supplier Products",
                  "lang": "En",
                  "id": 210
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "field_Required",
                  "resourceValue": "This field is required",
                  "lang": "En",
                  "id": 211
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "error_Occurred",
                  "resourceValue": "An error occurred",
                  "lang": "En",
                  "id": 212
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "status",
                  "resourceValue": "Status",
                  "lang": "En",
                  "id": 213
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "clientbrandlistheading",
                  "resourceValue": "Supplier Brand (Filter);",
                  "lang": "En",
                  "id": 214
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "clientbrandlistname",
                  "resourceValue": "Supplier Name",
                  "lang": "En",
                  "id": 215
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "dealOffer",
                  "resourceValue": "Deal & Offer",
                  "lang": "En",
                  "id": 216
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": " couponcode",
                  "resourceValue": "Coupon code",
                  "lang": "En",
                  "id": 217
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "typeOfCoupon",
                  "resourceValue": "Type of coupon",
                  "lang": "En",
                  "id": 218
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "redemationlink",
                  "resourceValue": "Redemation link",
                  "lang": "En",
                  "id": 219
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "clientbrandlistaction",
                  "resourceValue": "Action",
                  "lang": "En",
                  "id": 220
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "validityDate",
                  "resourceValue": "Validity Date",
                  "lang": "En",
                  "id": 221
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "termsAndCondition",
                  "resourceValue": "Terms and condition",
                  "lang": "En",
                  "id": 222
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "fieldNameNotEmpty",
                  "resourceValue": "Field name cannot be empty",
                  "lang": "En",
                  "id": 223
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "description_place",
                  "resourceValue": "description",
                  "lang": "En",
                  "id": 224
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "allocate.",
                  "resourceValue": "Allocate",
                  "lang": "En",
                  "id": 225
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "updateSuccessfully",
                  "resourceValue": "Update Successfully.",
                  "lang": "En",
                  "id": 226
              },
              {
                  "clientId": "0",
                  "resourceType": "UIMasterAdmin",
                  "resourceKey": "addedSuccessfully",
                  "resourceValue": "Added Successfully.",
                  "lang": "En",
                  "id": 227
              },
      ],
      httpStatusCode: "200",
      errorCode: "200",
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
