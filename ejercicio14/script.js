class Libro {
    isbn;
    titulo;
    autor;
    numPaginas;

    getIsbn(){
        return this.isbn;
    }
    getTitulo(){
        return this.titulo;
    }
    getAutor(){
        return this.autor;
    }
    getNumPaginas(){
        return this.numPaginas;
    }

    setIsbn(x){
        this.isbn = x;
    }
    setTitulo(x){
        this.titulo = x;
    }
    setAutor(x){
        this.autor = x;
    }
    setNumPaginas(x){
        this.numPaginas = x;
    }

    getInfoCompleta(){
        return `ISBN: ${this.isbn}
TITULO: ${this.titulo}
AUTOR: ${this.autor}
NUMERO DE PAGINAS: ${this.numPaginas}`
    }
}

let a =prompt("Ingrese el isbn del libro")
let b = prompt("Ingrese el titulo del libro")
let c = prompt("Ingrese el autor del libro")
let d =parseInt(prompt("Ingrese el numero de paginas del libro"))

// let lib = new Libro();
// lib.setIsbn(a)
// lib.setTitulo(b)
// lib.setAutor(c)
// lib.setNumPaginas(d)

// console.log(lib.getInfoCompleta())


/* otra opcion seria creando un objeto con JSON */

let libro = {
    isbn : a,
    titulo: b,
    autor: c,
    numPaginas: d,
    mostrarInfo: () => {
        return `ISBN: ${libro.isbn}
TITULO: ${libro.titulo}
AUTOR: ${libro.autor}
NUMERO DE PAGINAS: ${libro.numPaginas}`
    }
}

console.log(libro.mostrarInfo())