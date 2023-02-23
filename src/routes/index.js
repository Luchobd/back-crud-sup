const { Router } = require("express");
const router = Router();

router.get("/test", (req, res) => {
  const data = {
    name: "Lucho",
    website: "luisblanco.com",
  };
  res.json(data);
});

module.exports = router;
