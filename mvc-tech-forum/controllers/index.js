// Import modules
const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");

// Define routes
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
