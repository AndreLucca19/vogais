let frase = "Pneumoultramicroscopicossilicovulcanoconiótico";

let letra = frase.split('');

let vogais = Array.from(frase).filter(letra =>
    ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú", "â", "ê", "ô", "à", "ã", "õ", "â", "ê", "û", "ô", "î"].includes(letra.toLocaleLowerCase()));
console.log("vogais encontradas:" + vogais.join(', '));

console.log("Número de vogais:" + vogais.length);

//Lógica escrita:
//1 Definimos a frase queríamos
//2 Separamos a frase letra por letra
//3 Criamos a variavel vogais e usamos o .filter() para filtrar as vogais, em seguida usamos o .includes() que serve para incluir a letra maiúscula no array e o .toLowerCase() para mudar tudo para letra minúscula.