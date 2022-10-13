class Usuario{
    constructor(nombre, apellido ,libros ,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [libros];
        this.mascotas = mascotas;
    }
    getFullName(){
        return(this.nombre + " " + this.apellido)
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(nombre, autor){
        this.libros.push({ nombre: nombre, autor: autor })
    }
    getBookNames(){
        return this.libros.map((libros)=>libros.nombre)
    }
}

let usuario2 = new Usuario("Gaston", "Torres" ,{nombre: "El lobo estepario" ,autor:"Hermann Hesse"},["Kirara","Chiquito"])

console.log(usuario2.getFullName())

console.log(usuario2.countMascotas())
usuario2.addMascota("Nissan")
console.log(usuario2.countMascotas())

console.log(usuario2.getBookNames())
usuario2.addBook("Los siete locos", "Roberto Arlt")
console.log(usuario2.getBookNames())