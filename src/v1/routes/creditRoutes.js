const express = require("express");

const creditController = require("../controllers/creditController");
const signController = require("../controllers/signController");

const router = express.Router();

router.get("/", creditController.getAllCredits);
  
router.get("/:creditId", creditController.getOneCredit);

router.get("/:creditId/signs", signController.getSignForCredit);

router.post("/", creditController.createNewCredit);
  
router.patch("/:creditId", creditController.updateOneCredit);
  
router.delete("/:creditId", creditController.deleteOneCredit);
  
module.exports = router;