const buttons = document.querySelectorAll(".buttons");
let valorDigitado = document.getElementById("num");
let gorjeta = document.getElementById("gorjetas");
let total = document.getElementById("total");
let inputNumeroDePessoas = document.getElementById("numeroDePessoas");
let resultado1;
valorDigitado.addEventListener("change", (evento) => {
  //verifico se em evento.target existe um valor, no caso o input
  //se nao existir um valor
  if (evento.target.value == "") {
    // então eu escrevo na minha divtotal e divgorjeta 0.00
    total.innerHTML = `$0.00`;
    gorjeta.innerHTML = `$0.00`;
    document.getElementById("numeroDePessoas").setAttribute("disabled", true); //desabilito o meu input se não existir nada no meu input valorDigitado.
  } else {
    document.getElementById("numeroDePessoas").removeAttribute("disabled"); //habilita meu input, inputNumeroDePessoas, caso exista algo em valorDigitado.

    //se existir alguma coisa escrevo na minha divtotal o valor.
    total.innerHTML = `$${evento.target.value}.00`;
    document.addEventListener("click", (evento) => {
      //verifico se o click foi no botão, se sim, eu coloco 0.0 na minha divGorjeta.
      if (evento.target.matches(".buttons")) {
        //   gorjetaDoGarçom(evento.target.id, valorDigitado.value);
        gorjeta.innerHTML = `$0.00`;
      }
    });
    inputNumeroDePessoas.addEventListener("change", () => {
      if (inputNumeroDePessoas.value == "") {
        document.getElementById("5").setAttribute("disabled", true); //desabilito o meu input CUSTOM, se não existir nada no meu inputNumeroDePessoas.
        //se o meu input inputNumeroDePessoas for vazio
        total.innerHTML = `$${evento.target.value}.00`; //escrevo na minha div total o valor
        gorjeta.innerHTML = `$0.00`; // e coloco 0.00 caso aja alguma coisa, onde não é para ter
        limpaErro(); // se meu input existiver sem nada depois de exibir o erro, eu limpo.
        document.addEventListener("click", (evento) => {
          if (evento.target.matches(".buttons")) {
            gorjeta.innerHTML = `$0.00`;
            // gorjetaDoGarçom(evento.target.id, valorDigitado.value);
          }
        });
      } else {
        //se existir alguma coisa no meu input executo a baixo
        document.getElementById("5").removeAttribute("disabled"); //habilita meu input CUSTOM, caso exista algo em inputNumeroDePessoas.
        console.log(inputNumeroDePessoas.value);
        document.addEventListener("click", (evento) => {
          if (evento.target.matches(".buttons")) {
            //se o click for no butão e
            if (inputNumeroDePessoas.value == 0) {
              // se o numeroDePessoas for igual a 0, eu só exibo o erro;
              exibeErro();
            }
          }
        });
        //se no meu proximo click, numerodepssoas for igual a 0, só exibo o erro.
        if (inputNumeroDePessoas.value == 0) {
          console.log("to aqui tbm");
          exibeErro(); // se o que existir no meu input for igual a 0 eu exibo um erro;
        } else {
          // se não for igual a 0, executo a função.
          limpaErro(); // se existir alguma coisa em meu input depois de exibir o erro, eu limpo.
          gorjeta.innerHTML = `$0.00`;
          resultado1 = (
            evento.target.value / inputNumeroDePessoas.value
          ).toFixed(2);
          total.innerHTML = `$${resultado1}`;
          document.addEventListener("click", (evento) => {
            console.log(evento.target.id);
            if (evento.target.matches(".buttons")) {
              console.log("a função que chama a gorjeta foi chamada");
              gorjeta.innerHTML = `$0.00`;
              gorjetaDoGarçom(evento.target.id, resultado1);
            } else {
              gorjetaDoGarçomCustom(buttons[5], resultado1);
            }
          });
        }
      }
    });
  }
});

function exibeErro() {
  gorjeta.innerHTML = `$0.00`;
  let erro = document.getElementById("erro");
  //   inputNumeroDePessoas.style.outline = "none";
  inputNumeroDePessoas.style.border = "2px solid red";
  erro.innerHTML = "Can't be zero!";
}

function limpaErro() {
  let erro = document.getElementById("erro");
  inputNumeroDePessoas.style.border = "";
  erro.innerHTML = "";
}

function gorjetaDoGarçom(id, resultado1) {
  let buttons = document.getElementById(id);
  let porcentagem = buttons.value / 100;
  let resultado;
  resultado = (porcentagem * resultado1).toFixed(2);
  gorjeta.innerHTML = `$${resultado}`;
  resultado = 0;
}
function gorjetaDoGarçomCustom(valorDoCustom, resultado1) {
  let porcentagem = valorDoCustom.value / 100;
  let resultado;
  resultado = (porcentagem * resultado1).toFixed(2);
  gorjeta.innerHTML = `$${resultado}`;
  resultado = 0;
}
function focusInput() {
  document.getElementById("num").focus();
}

function reset() {
  location.reload();
}

//FAZENDO REQUISIÇÃO API

// const request = require("request");

// const moedas = "USD-BRL";

// const options = {
//   url: ` https://economia.awesomeapi.com.br/last/${moedas}`,
//   method: "GET",
//   headers: {
//     "`Accept`": "application/json",
//     "Accept-Charset": "utf-8",
//   },
// };

// const callback = function (erro, res, body) {
//   let json = JSON.parse(body);
//   cotacao = json.USD["bid"];
//   console.log(cotacao);
//   console.log(json);
// };

// request(options, callback);

///

//
// function convertendoDolar() {
//   let res = document.getElementById("res");
//   let moedas = document.getElementById("moedas");

//   if (moedas.value[0] == "$") {
//     let n = Number(t1.value);
//     let convert = n * 5.08;
//     res.innerHTML = `Convertido em Dólar: ${convert}`;
//   } else if (moedas.value[1] == "Є") {
//     let n = Number(t1.value);
//     let convert = n * 5.56;
//     res.innerHTML = `Convertido em Euro: ${convert.toFixed(2)}`;
//     console.log(res);
//   } else {
//     let n = Number(t1.value);
//     let convert = n * 6.64;
//     res.innerHTML = `Convertido em Libra: ${convert.toFixed(2)}`;
//   }
// }
