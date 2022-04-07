const buttons = document.querySelectorAll(".buttons");
let valorDigitado = document.getElementById("num");
let gorjeta = document.getElementById("gorjetas");
let total = document.getElementById("total");
let numeroDePessoas = document.querySelector("#numeroDePessoas");
let resultado1;
valorDigitado.addEventListener("change", (evento) => {
  if (evento.target.value == "") {
    total.innerHTML = `$0.00`;
    gorjeta.innerHTML = `$0.00`;
  } else {
    total.innerHTML = `$${evento.target.value}`;
    document.addEventListener("click", (evento) => {
      if (evento.target.matches(".buttons")) {
        gorjetaDoGarçom(evento.target.id, valorDigitado.value);
      }
    });
    numeroDePessoas.addEventListener("change", () => {
      if (numeroDePessoas.value == "" || numeroDePessoas.value <= 1) {
        total.innerHTML = `$${evento.target.value}`;
        gorjeta.innerHTML = `$0.00`;
        document.addEventListener("click", (evento) => {
          if (evento.target.matches(".buttons")) {
            gorjetaDoGarçom(evento.target.id, valorDigitado.value);
          }
        });
      } else {
        resultado1 = (evento.target.value / numeroDePessoas.value).toFixed(2);
        total.innerHTML = `$${resultado1}`;
        document.addEventListener("click", (evento) => {
          if (evento.target.matches(".buttons")) {
            gorjetaDoGarçom(evento.target.id, resultado1);
          }
        });
      }
    });
  }
});

function gorjetaDoGarçom(id, resultado1) {
  let buttons = document.getElementById(id);
  let porcentagem = buttons.value / 100;
  let resultado;
  resultado = (porcentagem * resultado1).toFixed(2);
  gorjeta.innerHTML = `$${resultado}`;
  resultado = 0;
}

function reset() {
  location.reload();
}

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
