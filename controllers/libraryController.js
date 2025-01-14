const ProductModel = require("../models/libraryModel");
module.exports = {
  addLibro: (req, res) => {
    const libroReq = req.body;
    res.json({ success: ProductModel.addLibro(libroReq) });
  },

  getLibro: (req, res) => {
    const isbn = req.params.ISBN;
    let libro = ProductModel.getLibro(isbn);
    res.json({ success: true, book: libro });
  },

  getLibros: (req, res) => {
    res.json({ libros: ProductModel.getLibros() });
  },

  deleteLibro: (req, res) => {
    const isbn = req.params.ISBN;
    let eliminado = ProductModel.deleteLibro(isbn);
    res.json({ success: eliminado });
  },
};
