const express = require("express");
const router = express.Router();
/*
const cPost = require("./controllers/postController");
router.get("/api/post", cPost.get);
router.post("/api/post", cPost.post);

const cMedia = require("./controllers/mediaController")
router.post("/api/media", cMedia.post);
*/

const cEntity = require("./controllers/entityController");
router.get("/api/entities", cEntity.get);
router.post("/api/entities", cEntity.post);
router.put("/api/entities", cEntity.put);
router.delete("/api/entities", cEntity.delete);

module.exports = router;

