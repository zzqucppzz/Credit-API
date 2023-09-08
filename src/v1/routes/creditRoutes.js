const express = require("express");

const creditController = require("../controllers/creditController");

const router = express.Router();

router.get("/", creditController.getAllCredits);
  
router.get("/:creditId", creditController.getOneCredit);
  
router.post("/", creditController.createNewCredit);
  
router.patch("/:creditId", creditController.updateOneCredit);
  
router.delete("/:creditId", creditController.deleteOneCredit);
  
module.exports = router;