const express = require("express");
const router = express.Router();

//@route = GET api/profile
//@desc =   Test
//@authenticity = public
router.get("/",(req,res)=>{
  res.send("profile");
})

module.exports = router;
