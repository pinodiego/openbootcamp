
// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

let listaCompra = ["Cebollas", "Manteca", "Papeles", "Ropa", "Vasos", "Platos", "Cubiertos", "Toallas"];

console.log(listaCompra);

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

listaCompra.push("Aceite de Girasol");

console.log(listaCompra);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

listaCompra.pop();

console.log(listaCompra);



// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const listaPelis = [
    {titulo: "Good bye Lenin!", director: "Wolfgang Becker", fecha: 2003},
    {titulo: "Pinocchio", director: "Guillermo del Toro", fecha: 2022},
    {titulo: "The lion king", director: "Roger Allers", fecha: 1994},
    {titulo: "The Matrix", director: "Cohen", fecha: 1999}
]


// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const listaEnero = listaPelis.filter(valor => valor.fecha > 2010 )

console.log (listaEnero);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const listaDirectores = listaPelis.map(valor => valor.director);

console.log(listaDirectores);


// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const listaTitulos = listaPelis.map(valor => valor.titulo);

console.log(listaTitulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const unidos = listaDirectores.concat((listaTitulos));

console.log (unidos);


// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const propagacion = [...listaDirectores, ...listaTitulos];

console.log (propagacion);
