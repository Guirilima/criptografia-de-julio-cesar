const axios = require('axios') // Acessando API
var CryptoJS = require("crypto-js"); //Resumo Criptografia

let alfabeto = "abcdefghijklmnopqrstuvwxyz";  //Alfabeto, para posteriomente ser consultado
let descifrado = ""; //Variavel 'Vazia', para receber String decifrada

function decipherLetter(letter, casas) { //Function para retonar quando for negativo
    const letterIndex = alfabeto.indexOf(letter);
    const alphaLetterIndex = letterIndex - casas;
    return alphaLetterIndex < 0
        ? alfabeto[alfabeto.length + alphaLetterIndex]
        : alfabeto[alphaLetterIndex];
}

function descriptografia(cifrado, casas) {
    cifrado = cifrado.toLowerCase();
    for (let letra in cifrado) { //Percorrendo cada indice da frase
        if (alfabeto.indexOf(cifrado[letra]) != -1) {
            let letterIndex = alfabeto.indexOf(cifrado[letra]); // Comparando se existe no alfabeto, e pegando o indice
            const alphaIndex = (letterIndex - casas) % alfabeto.length;
            descifrado += decipherLetter(cifrado[letra], casas);
        } else {
            descifrado += cifrado[letra];
        }
    }
    descifrado = descifrado;
    // console.log(`Palavra Original___________=> ${cifrado}`);
    // console.log(`Palavra DesCriptografada___=> ${descifrado}`);
};
//Acessando a API e obtendo os dados dela
const url = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=SEU-TOKEN'
axios.get(url)
    .then(resp => {
        let numero_casas = resp.data.numero_casas
        let cifrado = resp.data.cifrado
        descriptografia(cifrado, numero_casas);
        // Resumo Criptografia (SHA1)
        // ******************************************
        var hash = CryptoJS.SHA1(descifrado);
        var sha1 = CryptoJS.enc.Hex.stringify(hash);
        // console.log(sha1);
        // ******************************************
    })

// ******************************************
            // FIM PROGRAMA
// ******************************************

//Function para Criptografar
// ******************************************
// function criptografar() {
//     texto = texto.toLowerCase();
//     for (let letra in texto) { //Percorrendo cada indice da frase
//         if (alfabeto.indexOf(texto[letra]) != -1) {  //Checando se existe no alfabeto
//             let a = alfabeto.indexOf(texto[letra]); // Comparando se existe no alfabeto, e pegando o indice
//             cifrado += alfabeto[(a + casas) % alfabeto.length]; //Somando o indice antiga com o Nº de Casas e Guardando o valor numa nova Variavel 
//             // console.log(`Letra => ${texto[letra]} indice => ${letra}`); // imprimindo a letra e o indice
//             // console.log(`LetraNova => ${alfabeto[b]} indiceNovo => ${b}`); // imprimindo a letra e o indice
//         } else {
//             cifrado += texto[letra]; //Guardando o valor numa nova Variavel 
//         }
//     }
// };
// ******************************************