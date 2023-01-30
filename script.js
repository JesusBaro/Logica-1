//String = texto

//VAR
//ESCOPO GLOBAL - Variável declarada fora de uma função

// var cor = "azul"
// cor = "pink"
// cor = "verde"
// console.log(cor)

//ESCOPO Local - Variável declarada dentro de uma função

// function animais() {
//     let animal = "elefante"
//     console.log(animal)
// }
// animais();

//------------------------------------------------------
//-----Tipos de Variáveis ------------------------------

//LET - variável 

// let comida = "macarrão"
// comida = "feijão"
// console.log(comida)

// function cozinha (){
//     let geladeira = 'manteiga'
//     console.log(cozinha)
// }
// cozinha();

//CONST 
// const nascimento = 1998
// console.log(nascimento)


//NUMEROS
// let n1 = 3
// let n2 = 5
// let total = n1 +n2

// let n1 = 3
// let n2 = 5
// let total = n1  - n2

// let n1 = 3
// let n2 = 5
// let total = n1 * n2

// let n1 = 3
// let n2 = 5
// let total = n1 /n2

// let n1 = "3"
// let n2 = "5"
// let total = n1 +n2
// console.log (total)

// console.log (typeof n1)


//------------------------------------------------------
//-- COMPARAÇÃO ----------------------------------------------------


//COMPARAÇÃO
// console.log(3>2) // console mostra se a comparação é verdadeira

// = atribuição de tipo

// let number = 2
// let numero = 2
// console.log( number, numero)
 
// == verificação de valor

// console.log(numero == 2) //valor atribuido a variavel é true verdadeiro
// console.log(numero == 15) // aqu9i já da false por ser diferent

// == verificação de valor E TIPO
// console.log(number === 2)


//!= Diferença
// let verificar = "3" // string
// let verificar2 = 8 //number

// console.log(verificar !== 5) //true verdade que os valores e dados são diferentes
// console.log(verificar !== "3") //false pois os valores e tipos são iguais

// console.log(verificar2 != 8) //false pois os valores e tipos são iguais
// console.log(verificar2 != "oito") //true verdadenque os valores e dados são diferentes


// let n1 = 5
// let n2 = 20
// console.log( n1 <=5  )
// console.log ( n2 >=n1 )

// console.log ( n2 <=n1 )
// console.log ( n2 > 30 )
// console.log ( n2 != 22 )
// console.log ( n2 = 20 )

//------------------------------------------------------
//--- if e else --------------------------------------------------


// let idade =21
// if (idade >= 18){
//     console.log("voce pode assistir")
// } else {
//     console.log("voce está impedindo")
// }

// let primos =12
// let nome = "Beyonce"
// const nascimento= 1998
// let _numberDaSorte = 10

// if (primos == _numberDaSorte){
//     console.log( "Temos os mesmo valor e tipo")
// } else {
//     console.log ( "Nao temos os mesmo valor" )
// }

// TESTES = = = = = = = = = = = = = = = = = = = = = =
// let cidade1 = `goiânia`
// let cidade2 = `Rio de janeiro`


// if (cidade1 = cidade2 ) {
//     console.log(`Cidades iguais`)
// } else {
//     console.log(`Cidades diferentes`)
  
// }

// let data = 23
// let cidade1 = `goiânia`

// if (data == 20){
//     console.log(`acento vago`)

// } else {
//     console.log(`sem acento para essa data`)
  
// }

// let n1 = 40
// let n2 = 20
// if (n1 > n2) {
//     console.log (`você ganhou`, n1+n2)
// } else {
//     console.log (`você perdeu`, n1-n2)
 
// }

//selecaionando idade
// let idade = 20
// if (idade >= 18){
//  console.log(`voce tem maioridade `)
// }else{
//  console.log(`voce  não tem maioridade `)
// }


// let luz = 1 //acesa - true 
// // let luz = 0 // apaga - false
// if (luz == true){
//     console.log(`tudo acesso`)
// } else {
//     console.log(`tudo apagado`)
  
// }

//------------------------------------------------------
//- Operadore lógicos-----------------------------------------------------

// console.log (true && true)

// let a = 3 > 2 //= true
// let b = 2 > 3 // = false

// if(a ==true && b ==false){
//     console.log("as duas condiões são verdadeiras")
// } 


//  || or / ou 

// criar uma condição qu exiba uma mensagem no console.log se o o mes de aniversario esta certo
// let cantora= "Iza"
// let mes = "Setembro"

// if((mes==="Dezembro") || (mes === "Janeiro")){
// console.log (` A ${cantora} faz aniversario em janeiro ou dezembro`)
// } else {
// console.log (`A ${cantora} faz aniversário em ${mes}`)
// }

//template string `${}` - serve para poder colocar um texto maior usando um valor ou dado de uma varíavel


// let nome = "Jésus"
// let idade = 34

// if (( nome = "Jésus" ) ) {
    
// } else {
    
// }

// ! 
// let animal = false
// console.log(animal =!false)

// let humano = true
// console.log(humano =!true)


//------------------------------------------------------
// Operadores de Atribuição --------------------------------------------------


// let x = 3
// let y = 5

//atribuição x = y

// soma/concatenação

// console.log(x = y + x) // completo 
// console.log( x += y)  // simplificado 
//se rodar os dois consoloes ele soma de novo o x que ja soi somado


// subtração

// console.log(x = y - x)   // completo 
// console.log( y-= x)  // simplificado

// multiplicação

// console.log(x *= y)   // simplificado

//divisão
// console.log( x /= y )   // simplificado

//incremento unaria - adiciona 1 no valor final
// console.log( x ++ )   // simplificado

//decremento  - remove 1 no valor final 
//atribuição

// 5 + 1 = 6
// 6 + 1 = 7


//decrememto
// 5 - 1 = 4
// 4 - 1 = 3


// let x =2
// let y = 10
// //soma
// console.log(`O valor de x + y = ${x+=y} `)
// //subtração
// console.log( `O valor de x - y = ${x-=y}`)
// //divisão
// console.log( `O valor de x --  = ${x--}`)
// //multiplicação
// console.log( `O valor de x * y = ${ y *=y }`)
//------------------------------------------------------
// WHILE  & FOR-----------------------------------------------------

//  WHILE - enquanto
// Estrutura do while

// variavel = valor  // precisa de uma variavel
// while (condição){
//     tarefa
//     interação
// }

//fazendo a tbuada de 9 
// let tabuada = 1 //valor inicial
// while(tabuada <=10){ //contando até variavel atingir menor ou igual a 10
//     console.log( 9*tabuada ) // tafera - exibe 9 multiplicando com os valores verdadeiros da variavel, ou seja menores ou igual a 10
//     tabuada ++ // iteração somando mais 1 ao valor inicial da varial que é 1
// }

// let i = 0
// while (i <=100) {
//     console.log(i)
//     i++
// }

//  -- -  --- - - - - - - -- 
// DO-WHILE - EXECUTA O LOOP PRIMEIRO E DEPOIS VERIFICA A CONDIÇÃO.

//não entendi

// let  number= 0
// do{
//     number +=2
// }while(number <=20)
// console.log(number)




//- FOR  - - - - -
//ESTRUTURA DO FOR
// for (contador ; condição para terminar do loop; incrememto do contador)
// for (let i = 0; i<=10; i+=2) {
// // console.log(i)
// }

// for (let n2 = 3; n2<=100; n2 +=10){
//     // console.log(n2)
   
// }


//  Length- ------ ---- 
// let fruta = `morango`
// console.log(fruta.length)





//------------------------------------------------------
//FUNÇÃO -----------------------------------------------------

//sintax
// function identificador(PARAMENTRO) {
//     tarefa
// }
// indentificador();

//posso atribuir PARAMETROS dentro de uma função

// function mostrarNome(nome) { //funão com parametro
//  console.log(`Óla, me chamo ${nome}`)  
// }
// mostrarNome("Jésus")
// mostrarNome("Lara")
// mostrarNome("Ero")



//função 25/01/23


//função com paramentro
// function nomeDaFuncao(informacoes_ficam_aqui_guardando_seu_valor) {
//     console.log(`mostra qual meu valor ` + informacoes_ficam_aqui_guardando_seu_valor )
// }
// nomeDaFuncao (200)

//ex 1
//função com returno
//return -  retorna uma valor na execução quando uma valor não é definido

// function dobro(numero) { //criando uma função com o nome dobro, e no paramentro esta reservado para recebe uma informação
//     return numero*2 // retorna o valor do da variável numero muliplicado por 2
// }
// console.log(dobro(2)) // o console mostra a função e foi colocado o valor da variavel do paramentro chamado numero, tendo valor igual a dois

//ex 1
// function tiplo(number) {
//     return number*3
// }
// console.log (triplo(3)) // no caso tem que chamar. o nome de da função, e entre parenteses o valor do parametro, mas pq ?

//  Teste - - - - - - -


//usando variaveis globais e paramentro
// let $number = 3
//  function multi(number) {
//      console.log(  $number + number)
//     }
//     multi (10);

// let _num = 3
//  function multi(number) {
//      console.log( _num + number )
//  }
// multi(2)


// let n1 = 2
// function dobro(numero, n2) {  // dois parametro
//      numero + n2 *10 + n1
//     console.log( numero + n2 *10 + n1) // para poder ver a 
// }
// dobro(2,5);

// // dobro(100, 20);
// dobro (100,10) // valor de cada parametro separado.

// usand doisou mias paramentr
// function helloFriend(name, nickname, idade, cidade) {
//     console.log(`Olá ${name}, seja bem vindo(a) ao Vai na Web! Posso lhe chamar de ${nickname}? Você tem ${idade}? e mora em ${cidade}`);

// }
// helloFriend("Kraken", "Ygor Fonseca", 20, `Rio de janeiro`); 


//utilizando variavel dentro do paramentro

// let hortifruti = `morango`// declarando varivel
// function mostrarFruta(fruta) { //dentro do parametro () definimos como o valor "fruta"
//     console.log(`eu sou a fruta ${fruta}`)
// }
// mostrarFruta(hortifruti) //chamamos a variavel como argumento na chamada da função, dessa redefinomos o valor da 

// let concessionaria = `honda`

// function mostrarConcessionaria(marca) {
//     console.log (`trablhamos com a marca ${marca}`)
// }
// mostrarConcessionaria(concessionaria)

// Função com variável dentro- - - - - - -

// let infos = function  (nome,idade,cidade) {
//     console.log(`Me chamo ${nome}, tenho ${idade} anos e moro em ${cidade}`)
// }
// infos(`Jésus`, 24, `Rio de janeiro`);



//---------
//switch

// let fruta= `caju`
// switch (fruta) {
//     case `caju`:
//      console.log(`tem certeza que é essa fruta` )   
//         break;// se for verdade para aqui
//         default: //se for false exibe uma mensagem
//         console.log(`nao tenhos ${fruta}`)   
// }

// let idade =15
// switch (idade) {
//     case 18:
//         console.log("maior de idade")
//         break;
//         case 15:
//             console.log("menor de idade")
//             break;
//     default:
//         console.log("idade incompreensivel")
// }




// let mercado= `leite`
// switch (mercado) {
//     case `pão`: //condição 1
//         console.log(`não temos pão, apenas leite`)
//         break;
//         case `manteiga`:
//             console.log(`não temos manteiga, apenas leite`)
//         break;
//     default: // qunado não atinge nenhuma das condições 
//         console.log(`nao temos nada`)
//         break;
// }


// TESTES  = = = = = = = = = = = = = = =

// let idade1 = 12 //false
// let idade2 = 29 //true
// let idade3 = 50 //true
// let idade4 = 10 //false
// let idade5 = 13 //false

// let total = idade1 + idade2 + idade3 + idade4 + idade5
// console.log(`todos os participantes em um total de ${total} anos somados`)


//------------------
//Array 

// let compras = ["carne","ovos", "leite"]
// console.log(compras[2])
// // console.log(compras [1])

// //como remover dados
// let legumes = [`tomate`,`quiabo`,`jilo`,`abobrinha`]
// legumes.pop() //remove o ultimo item
// console.log(legumes)


// let frutas = [`morango`,`kiwi`,`banana`, `laranja`, ]
// frutas.shift() // remove o primeira item da array morango
//  console.log(frutas)
//  frutas.shift() // remove o proximo primeiro iten kiwi
//  console.log(frutas)


//  // adicionar itens
//  //unshitf - no começo
//  let compras = [`carne`,`leite`,`áçucar`]
//  compras.unshift(`óleo`,`cenoura`) //é possivel colocar mias de um item
//  console.log(compras)

//  //push - no final
// let array = [ `1`,2,`3`,4,`5`]
// array.push(20)
// console.log(array)


// //reverse() - 
// let contador = [ `1`,2,`3`,4,`5`]
// contador.reverse()
// console.log(contador)

// let lista = [`carne`,`leite`,`áçucar`]
// lista.reverse()
// console.log(lista)

// // sort - ordena em orgem cfescente ou alfabetica
// let ordenar = [ 4,8,4,9,0,2,4,3,19,6,8,5,8,9]
// ordenar.sort()
// console.log(ordenar)


// let alfafabeto = [`u`,`i`,`n`,`g`,`d`,`a`,`d`,`e`,`r`,`g`,`h`,`y`]
// alfafabeto.sort()
// console.log(alfafabeto)

//  criar lista que adicione um item no comeco e no final 

// let lista = []
// lista.unshift(`laranja`, `banana`)
// console.log(lista)
// lista.push(`abacaxi`, `cenoura`)
// console.log(lista)


// let frutas = [`morango`,`kiwi`,`banana`, `laranja`, ]
// console.log(`gostos de comer ${frutas [1]}`)

