class Libro {
  ISBN;
  titulo;
  autor;

  constructor(ISBN, titulo, autor) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
  }

  getlibro() {
    return this.ISBN;
  }
}

let libros = new Map();

module.exports = {
  addLibro: (libroReq) => {
    let respuesta = false;
    let libro = new Libro(libroReq.ISBN, libroReq.titulo, libroReq.autor);
    if (!libros.get(libro.ISBN)) {
      libros.set(libro.ISBN, libro);
      respuesta = true;
    }
    return respuesta;
  },

  getLibro: (ISBN) => {
    return libros.get(ISBN);
  },

  getLibros: () => {
    return Array.from(libros.values());
  },

  deleteLibro: (ISBN) => {
    let encontrado = false;
    let libro = libros.get(ISBN);

    if (libro) {
      libros.delete(ISBN);
      encontrado = true;
    }
    console.log(ISBN);
    console.log(libros);
    console.log(libro);
    console.log(encontrado);
    return encontrado;
  },
};
