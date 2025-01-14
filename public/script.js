document.getElementById("addProductForm").addEventListener("submit", addLibro);
document.getElementById("getLibroISBN").addEventListener("click", getLibro);
document.getElementById("getLibros").addEventListener("click", getLibros);
document.getElementById("eliminarLibro").addEventListener("click", deleteLibro);


async function addLibro(event) {
 event.preventDefault();
 const ISBN = document.getElementById("ISBN").value;
 const autor = document.getElementById("autor").value;
 const titulo = document.getElementById("titulo").value;


 try {
   const response = await fetch("/nuevo", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({ ISBN, autor, titulo }),
   });


   const data = await response.json();
   if (data.success) {
     alert("Añadido correctamente");
   } else {
     alert("No se puedo añadir");
   }
 } catch (error) {
   console.log("Error inesperado");
 }
}


async function getLibro() {
 let ISBN = document.getElementById("ISBNNUevo").value;


 try {
   const response = await fetch(`/libro/${ISBN}`, {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
     },
   });


   const data = await response.json();
   const libro = data.book;
   fila = `<tr><td>${libro.ISBN}</td>
       <td>${libro.titulo}</td>
       <td>${libro.autor}</td>
       </tr>`;
   document.getElementById("productList").innerHTML = fila;
 } catch (error) {
   console.log("Error inesperado");
 }
}


async function getLibros() {
 try {
   const response = await fetch("/libros", {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
     },
   });


   const data = await response.json();
   libros = data.libros;
   filas = "";
   for (let index = 0; index < libros.length; index++) {
     libro = libros[index];
     fila = `<tr><td>${libro.ISBN}</td>
           <td>${libro.titulo}</td>
           <td>${libro.autor}</td></tr>`;
     filas += fila;
   }
   document.getElementById("productList").innerHTML = filas;
 } catch (error) {
   console.log(error);
 }
}


async function deleteLibro() {
   let ISBN = document.getElementById("ISBNNUevo").value;
   try {
       const response = await fetch(`/borrar/${ISBN}`,{
           method: "DELETE",
           headers: {
               "Content-Type": "application/json",
           },
       });
       const data = await response.json();
       console.log(data)
       if(data.success){
           alert("Eliminado correctamente")
       }else{
           alert("No existe")
       }
   } catch (error) {
       console.log("Hubo un problema")
   }
}
