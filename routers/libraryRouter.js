const express = require("express");
const router = express.Router();
const productController = require("../controllers/libraryController");

router.post("/nuevo", productController.addLibro);
router.get("/libro/:ISBN", productController.getLibro);
router.get("/libros", productController.getLibros);
router.delete("/borrar/:ISBN", productController.deleteLibro);

module.exports = router;
