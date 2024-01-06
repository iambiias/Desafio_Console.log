//Passo a passo para você conseguir um ingresso para o cruzeiro do Roberto Carlos com participação mais que especial da Mariah Carey. 🎉🎉🎉

//Mostre no console.log a mensagem "Ano novo está chegando!!";

let mensagem = "Ano novo está chegando!!";
console.log(mensagem);

//Crie uma variável que receba o nome da cantora Mariah Carey
let cantora = "Mariah Carey";
console.log(cantora);
//Crie uma variável que receba a idade dela
let idade = 54;
console.log(idade);
//Crie uma variável com o ano atual e subtraia pelo o valor da idade da Mariah Carey
let ano = 2023;
console.log(ano - idade);

//Crie uma variável para guardar a data de nascimento da Mariah Carey (Simples, é só pegar o ano atual e subtrair pela a idade dela 😉)
let anoNascimentoMariah = 2023 - 54;

//Mostre no console a data de nascimento da Mariah Carey
console.log(anoNascimentoMariah);

//Crie uma variável chamada “quartaFeira” e atribua à ela o valor booleano que representa verdadeiro ou falso e mostre a saída no console.log;
let dataAtual = new Date();
let quartaFeira = dataAtual.getDay() === 6;
console.log(quartaFeira);

//Exiba no console o tipo de dado da váriavel quartaFeira;
console.log(typeof quartaFeira);
//Crie uma condição  SE você for maior ou igual 18 retornará  a mensagem:  Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey. SENÃO for maior ou igual a 18,  retorne a seguinte mensagem:  "Sinto muito, mas assistirá da tv globo"
let idadePermitida = 18;
if (idadePermitida >= 18) {
  console.log(
    "Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey."
  );
} else {
  console.log("Sinto muito, mas, assistirá da tv globo");
}
//Crie uma condição que exiba uma mensagem no console se você fizer aniversário em Agosto OU Dezembro OU JUNHO. Caso seja verdadeira a informação, retorne essa mensagem: Uma ou mais opções estão corretas. O mês escolhido foi o mês tal. Caso a informação seja falsa, retorne a seguinte mensagem:  Algo de errado não está certo, o mês digitado foi o mês tal.
let mesAniversario = "Agosto";
if (
  mesAniversario === "Agosto" ||
  mesAniversario === "Junho" ||
  mesAniversario === "Dezembro"
) {
  console.log(
    "Uma ou mais opções estão corretas. O mês escolhido foi " + mesAniversario
  );
} else {
  console.log(
    " Algo de errado não está certo, o mês digitado foi " + mesAniversario
  );
}
