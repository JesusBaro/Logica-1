// //String = texto

// //VAR
// //ESCOPO GLOBAL - Variável declarada fora de uma função

// // var cor = "azul"
// // cor = "pink"
// // cor = "verde"
// // console.log(cor)

// //ESCOPO Local - Variável declarada dentro de uma função

// // function animais() {
// //     let animal = "elefante"
// //     console.log(animal)
// // }
// // animais();

// //------------------------------------------------------
// //-----Tipos de Variáveis ------------------------------

// //LET - variável 

// // let comida = "macarrão"
// // comida = "feijão"
// // console.log(comida)

// // function cozinha (){
// //     let geladeira = 'manteiga'
// //     console.log(cozinha)
// // }
// // cozinha();

// //CONST 
// // const nascimento = 1998
// // console.log(nascimento)


// //NUMEROS
// // let n1 = 3
// // let n2 = 5
// // let total = n1 +n2

// // let n1 = 3
// // let n2 = 5
// // let total = n1  - n2

// // let n1 = 3
// // let n2 = 5
// // let total = n1 * n2

// // let n1 = 3
// // let n2 = 5
// // let total = n1 /n2

// // let n1 = "3"
// // let n2 = "5"
// // let total = n1 +n2
// // console.log (total)

// // console.log (typeof n1)


// //------------------------------------------------------
// //-- COMPARAÇÃO ----------------------------------------------------


// //COMPARAÇÃO
// // console.log(3>2) // console mostra se a comparação é verdadeira

// // = atribuição de tipo

// // let number = 2
// // let numero = 2
// // console.log( number, numero)
 
// // == verificação de valor

// // console.log(numero == 2) //valor atribuido a variavel é true verdadeiro
// // console.log(numero == 15) // aqu9i já da false por ser diferent

// // == verificação de valor E TIPO
// // console.log(number === 2)


// //!= Diferença
// // let verificar = "3" // string
// // let verificar2 = 8 //number

// // console.log(verificar !== 5) //true verdade que os valores e dados são diferentes
// // console.log(verificar !== "3") //false pois os valores e tipos são iguais

// // console.log(verificar2 != 8) //false pois os valores e tipos são iguais
// // console.log(verificar2 != "oito") //true verdadenque os valores e dados são diferentes


// // let n1 = 5
// // let n2 = 20
// // console.log( n1 <=5  )
// // console.log ( n2 >=n1 )

// // console.log ( n2 <=n1 )
// // console.log ( n2 > 30 )
// // console.log ( n2 != 22 )
// // console.log ( n2 = 20 )

// //------------------------------------------------------
// //--- if e else --------------------------------------------------


// // let idade =21
// // if (idade >= 18){
// //     console.log("voce pode assistir")
// // } else {
// //     console.log("voce está impedindo")
// // }

// // let primos =12
// // let nome = "Beyonce"
// // const nascimento= 1998
// // let _numberDaSorte = 10

// // if (primos == _numberDaSorte){
// //     console.log( "Temos os mesmo valor e tipo")
// // } else {
// //     console.log ( "Nao temos os mesmo valor" )
// // }

// // TESTES = = = = = = = = = = = = = = = = = = = = = =
// // let cidade1 = `goiânia`
// // let cidade2 = `Rio de janeiro`


// // if (cidade1 = cidade2 ) {
// //     console.log(`Cidades iguais`)
// // } else {
// //     console.log(`Cidades diferentes`)
  
// // }

// // let data = 23
// // let cidade1 = `goiânia`

// // if (data == 20){
// //     console.log(`acento vago`)

// // } else {
// //     console.log(`sem acento para essa data`)
  
// // }

// // let n1 = 40
// // let n2 = 20
// // if (n1 > n2) {
// //     console.log (`você ganhou`, n1+n2)
// // } else {
// //     console.log (`você perdeu`, n1-n2)
 
// // }

// //selecaionando idade
// // let idade = 20
// // if (idade >= 18){
// //  console.log(`voce tem maioridade `)
// // }else{
// //  console.log(`voce  não tem maioridade `)
// // }


// // let luz = 1 //acesa - true 
// // // let luz = 0 // apaga - false
// // if (luz == true){
// //     console.log(`tudo acesso`)
// // } else {
// //     console.log(`tudo apagado`)
  
// // }

// //------------------------------------------------------
// //- Operadore lógicos-----------------------------------------------------

// // console.log (true && true)

// // let a = 3 > 2 //= true
// // let b = 2 > 3 // = false

// // if(a ==true && b ==false){
// //     console.log("as duas condiões são verdadeiras")
// // } 


// //  || or / ou 

// // criar uma condição qu exiba uma mensagem no console.log se o o mes de aniversario esta certo
// // let cantora= "Iza"
// // let mes = "Setembro"

// // if((mes==="Dezembro") || (mes === "Janeiro")){
// // console.log (` A ${cantora} faz aniversario em janeiro ou dezembro`)
// // } else {
// // console.log (`A ${cantora} faz aniversário em ${mes}`)
// // }

// //template string `${}` - serve para poder colocar um texto maior usando um valor ou dado de uma varíavel


// // let nome = "Jésus"
// // let idade = 34

// // if (( nome = "Jésus" ) ) {
    
// // } else {
    
// // }

// // ! 
// // let animal = false
// // console.log(animal =!false)

// // let humano = true
// // console.log(humano =!true)


// //------------------------------------------------------
// // Operadores de Atribuição --------------------------------------------------


// // let x = 3
// // let y = 5

// //atribuição x = y

// // soma/concatenação

// // console.log(x = y + x) // completo 
// // console.log( x += y)  // simplificado 
// //se rodar os dois consoloes ele soma de novo o x que ja soi somado


// // subtração

// // console.log(x = y - x)   // completo 
// // console.log( y-= x)  // simplificado

// // multiplicação

// // console.log(x *= y)   // simplificado

// //divisão
// // console.log( x /= y )   // simplificado

// //incremento unaria - adiciona 1 no valor final
// // console.log( x ++ )   // simplificado

// //decremento  - remove 1 no valor final 
// //atribuição

// // 5 + 1 = 6
// // 6 + 1 = 7


// //decrememto
// // 5 - 1 = 4
// // 4 - 1 = 3


// // let x =2
// // let y = 10
// // //soma
// // console.log(`O valor de x + y = ${x+=y} `)
// // //subtração
// // console.log( `O valor de x - y = ${x-=y}`)
// // //divisão
// // console.log( `O valor de x --  = ${x--}`)
// // //multiplicação
// // console.log( `O valor de x * y = ${ y *=y }`)
// //------------------------------------------------------
// // WHILE  & FOR-----------------------------------------------------

// //  WHILE - enquanto
// // Estrutura do while

// // variavel = valor  // precisa de uma variavel
// // while (condição){
// //     tarefa
// //     interação
// // }

// //fazendo a tbuada de 9 
// // let tabuada = 1 //valor inicial
// // while(tabuada <=10){ //contando até variavel atingir menor ou igual a 10
// //     console.log( 9*tabuada ) // tafera - exibe 9 multiplicando com os valores verdadeiros da variavel, ou seja menores ou igual a 10
// //     tabuada ++ // iteração somando mais 1 ao valor inicial da varial que é 1
// // }

// // let i = 0
// // while (i <=100) {
// //     console.log(i)
// //     i++
// // }

// //  -- -  --- - - - - - - -- 
// // DO-WHILE - EXECUTA O LOOP PRIMEIRO E DEPOIS VERIFICA A CONDIÇÃO.

// //não entendi

// // let  number= 0
// // do{
// //     number +=2
// // }while(number <=20)
// // console.log(number)




// //- FOR  - - - - -
// //ESTRUTURA DO FOR
// // for (contador ; condição para terminar do loop; incrememto do contador)
// // for (let i = 0; i<=10; i+=2) {
// // // console.log(i)
// // }

// // for (let n2 = 3; n2<=100; n2 +=10){
// //     // console.log(n2)
   
// // }


// //  Length- ------ ---- 
// // let fruta = `morango`
// // console.log(fruta.length)





// //------------------------------------------------------
// //FUNÇÃO -----------------------------------------------------

// //sintax
// // function identificador(PARAMENTRO) {
// //     tarefa
// // }
// // indentificador();

// //posso atribuir PARAMETROS dentro de uma função

// // function mostrarNome(nome) { //funão com parametro
// //  console.log(`Óla, me chamo ${nome}`)  
// // }
// // mostrarNome("Jésus")
// // mostrarNome("Lara")
// // mostrarNome("Ero")



// //função 25/01/23


// //função com paramentro
// // function nomeDaFuncao(informacoes_ficam_aqui_guardando_seu_valor) {
// //     console.log(`mostra qual meu valor ` + informacoes_ficam_aqui_guardando_seu_valor )
// // }
// // nomeDaFuncao (200)

// //ex 1
// //função com returno
// //return -  retorna uma valor na execução quando uma valor não é definido

// // function dobro(numero) { //criando uma função com o nome dobro, e no paramentro esta reservado para recebe uma informação
// //     return numero*2 // retorna o valor do da variável numero muliplicado por 2
// // }
// // console.log(dobro(2)) // o console mostra a função e foi colocado o valor da variavel do paramentro chamado numero, tendo valor igual a dois

// //ex 1
// // function tiplo(number) {
// //     return number*3
// // }
// // console.log (triplo(3)) // no caso tem que chamar. o nome de da função, e entre parenteses o valor do parametro, mas pq ?

// //  Teste - - - - - - -


// //usando variaveis globais e paramentro
// // let $number = 3
// //  function multi(number) {
// //      console.log(  $number + number)
// //     }
// //     multi (10);

// // let _num = 3
// //  function multi(number) {
// //      console.log( _num + number )
// //  }
// // multi(2)


// // let n1 = 2
// // function dobro(numero, n2) {  // dois parametro
// //      numero + n2 *10 + n1
// //     console.log( numero + n2 *10 + n1) // para poder ver a 
// // }
// // dobro(2,5);

// // // dobro(100, 20);
// // dobro (100,10) // valor de cada parametro separado.

// // usand dois ou mais paramentros
// // function helloFriend(name, nickname, idade, cidade) {
// //     console.log(`Olá ${name}, seja bem vindo(a) ao Vai na Web! Posso lhe chamar de ${nickname}? Você tem ${idade}? e mora em ${cidade}`);

// // }
// // helloFriend("Kraken", "Ygor Fonseca", 20, `Rio de janeiro`); 


// //utilizando variavel dentro do paramentro

// // let hortifruti = `morango`// declarando varivel
// // function mostrarFruta(fruta) { //dentro do parametro () definimos como o valor "fruta"
// //     console.log(`eu sou a fruta ${fruta}`)
// // }
// // mostrarFruta(hortifruti) //chamamos a variavel como argumento na chamada da função, dessa redefinomos o valor da 

// // let concessionaria = `honda`

// // function mostrarConcessionaria(marca) {
// //     console.log (`trablhamos com a marca ${marca}`)
// // }
// // mostrarConcessionaria(concessionaria)

// // Função com variável dentro- - - - - - -

// // let infos = function  (nome,idade,cidade) {
// //     console.log(`Me chamo ${nome}, tenho ${idade} anos e moro em ${cidade}`)
// // }
// // infos(`Jésus`, 24, `Rio de janeiro`);

// //--------------------------------------------
// //Replace, Lentgh e Substring

// // let frase= `gatos são melhores que cachorros`
// //  console.log(frase.replace(`cachorros`,`gatos` ))
// // console.log(frase.replace(`gatos`,`lobos` ))
// // console.log(frase.replaceAll(`cachorros`,`gatos` )) // replaceAll

// // // console.log(frase.substring(0,5 ))
// // console.log(frase.substring(5))
// // console.log(frase.substring(10,-20)) // valores negativos são considerados como 0 (inical da string)
// // console.log(frase.substring(10,20))




// //---------------------------------------------
// //switch
// // sintax

// // let fruta= `caju`
// // switch (fruta) {
// //     case `caju`:
// //      console.log(`tem certeza que é essa fruta` )   
// //         break;// se for verdade para aqui
// //         default: //se for false exibe uma mensagem
// //         console.log(`nao tenhos ${fruta}`)   
// // }

// // let idade =15
// // switch (idade) {
// //     case 18:
// //         console.log("maior de idade")
// //         break;
// //         case 15:
// //             console.log("menor de idade")
// //             break;
// //     default:
// //         console.log("idade incompreensivel")
// // }
// //  teste - -- - - - - - - 
// // let idade =18
// // switch (idade) {
// //     case idade >= 18:
// //         console.log("maior de idade")
// //         break;
// //         case idade < 15:
// //             console.log("menor de idade")
// //             break;
// //     default:
// //         console.log("idade incompreensivel")
// // }




// // let mercado= `leite`
// // switch (mercado) {
// //     case `pão`: //condição 1
// //         console.log(`não temos pão, apenas leite`)
// //         break;
// //         case `manteiga`:
// //             console.log(`não temos manteiga, apenas leite`)
// //         break;
// //     default: // qunado não atinge nenhuma das condições 
// //         console.log(`nao temos nada`)
// //         break;
// // }


// // TESTES  = = = = = = = = = = = = = = =

// // let idade1 = 12 //false
// // let idade2 = 29 //true
// // let idade3 = 50 //true
// // let idade4 = 10 //false
// // let idade5 = 13 //false

// // let total = idade1 + idade2 + idade3 + idade4 + idade5
// // console.log(`todos os participantes em um total de ${total} anos somados`)


// //------------------
// //Array 

// // let compras = ["carne","ovos", "leite"]
// // console.log(compras[2])
// // // console.log(compras [1])

// // //como remover dados
// // let legumes = [`tomate`,`quiabo`,`jilo`,`abobrinha`]
// // legumes.pop() //remove o ultimo item
// // console.log(legumes)


// // let frutas = [`morango`,`kiwi`,`banana`, `laranja`, ]
// // frutas.shift() // remove o primeira item da array morango
// //  console.log(frutas)
// //  frutas.shift() // remove o proximo primeiro iten kiwi
// //  console.log(frutas)


// //  // adicionar itens
// //  //unshitf - no começo
// //  let compras = [`carne`,`leite`,`áçucar`]
// //  compras.unshift(`óleo`,`cenoura`) //é possivel colocar mias de um item
// //  console.log(compras)

// //  //push - no final
// // let array = [ `1`,2,`3`,4,`5`]
// // array.push(20)
// // console.log(array)


// // //reverse() - 
// // let contador = [ `1`,2,`3`,4,`5`]
// // contador.reverse()
// // console.log(contador)

// // let lista = [`carne`,`leite`,`áçucar`]
// // lista.reverse()
// // console.log(lista)

// // sort - ordena em orgem cfescente ou alfabetica
// // let ordenar = [ 4,8,4,9,0,2,4,3,19,6,8,5,8,9]
// // ordenar.sort()
// // console.log(ordenar)


// // let alfafabeto = [`u`,`i`,`n`,`g`,`d`,`a`,`d`,`e`,`r`,`g`,`h`,`y`]
// // alfafabeto.sort()
// // console.log(alfafabeto)

// //  criar lista que adicione um item no comeco e no final 

// // let lista = []
// // lista.unshift(`laranja`, `banana`)
// // console.log(lista)
// // lista.push(`abacaxi`, `cenoura`)
// // console.log(lista)


// // let frutas = [`morango`,`kiwi`,`banana`, `laranja`, ]
// // console.log(`gostos de comer ${frutas [1]}`)

// // -------------------------------
// // aula 30/01/

// //métodos array - é uma lista de dados em uma variavel

// // let _ordem = [ 4,8,4,9,0,2,4,3,19,6,8,5,8,9]
// // console.log(_ordem(5))



// //reviSão sort
// // função de comparação, para ordenar em ordem alfabética
// // let _ordenar = [ 4,8,4,937,0,2,400,3,19,69,87,5,18,9]
// // _ordenar.sort (function (a,b) { 
// //     return a-b
// // }) 
// // console.log(_ordenar)

// // let frutas = [`morango`,`kiwi`,`banana`, `laranja`,`carne` ]
// // //slice
// // console.log(
// // frutas.slice(4,5)  // o primeiro indice é onde começa e o ultimo onde termina
// // )
// // console.log( frutas.slice(1,5)) // o primeiro indice é onde começa e o ultimo onde termina)
// // console.log( frutas.slice(0,3))
// //splice
// // let frutas = [`morango`,`kiwi`,`banana`, `laranja`,`carne` ]

// // // frutas.splice(0,1 )  // removendo itens: o primeiro indice é onde começa, o segundn oa qunatidade de itens que serao apagados

// // console.log(frutas)
// // // frutas.splice(4,0,`melão`) //adicionando itens : o seguno parametro precisa ser zero, para que ele não apague

// // frutas.splice(2,2,`ovos`,`azeite`) //substituindo itens : o primeiros indice indica onde começa, o segundo apaga a quantidade de itens, e depois é só escrever em cima



// // let compras = ["açucar", "melão", "goiaba", "morango", "cereja"];
// // console.log(compras[3]);

// // compras.pop(); //retira  o ultimo item da array.
// // console.log(compras);

// // compras.shift(); //remove o primeiro item da array
// // console.log(compras);

// // console.log(compras.unshift("abobora")); //adiciona um item no inicio da array
// // console.log(compras.push("cereja")); // adiciona um item no final da array
// // let nomes = ["Diulieira", "Alberto", "Josias", "Lucio", "Bianca"];
// // nomes.sort();
// // console.log(nomes);

// // let numbers = [2, 3, 5, 9, 7, 1, 8];

// // console.log(numbers.sort());

// // let num = [10, 20, 35, 1, 9, 856, 8, 1000, 2560];

// // num.sort(function (a, b) {
// //   return a - b;
// // });
// // //metodo sort organiza os itens em ordem, geralmente alfabetica, decrescente ou crescente, quando existem numeros com mais de um algaritimo precisamos usar uma função anonima como parametro para guiar o metodo em uma ordem especifica.

// // console.log(num);

// // console.log(compras.slice(1, 2)); //copia uma array existente para uma nova array sem que a array original seja modificada, o slice o primeiro indice é aonde começa e o segundo indice é a onde termina o itens entre os indices indicados vão ser copiados

// // compras.splice(1, 1); // o splice, remove, adiciona ou substitui um ou mais itens da sua array, o primeiro indice indica de qual indice eu vou partir e o segundo indice indica a quantidade de itens que eu quero ou remover ou substituir. para substituir um item eu preciso descreve após o indice o tipo de dado que quero substitui ou adicionar na array

// // compras.splice(0, 0, "caja", "melancia"); //adição
// // compras.splice(0, 2, "mitrilo", "uva passas"); //substituição

// // console.log(compras);

// // //objetos são muito importantes no javascript, neles podemos guardar propriedades que podem guardar todo tipo de dado e informação desde um dado simples como uma array até uma função ou um array, também podemos fazer uma array de objetos.

// // let obj = {
// //   nome: "Karynne",
// //   idade: 23,
// //   cidade: "rio de janeiro"
// // };

// // console.log(obj.idade); //mostra uma propriedade especifica do objeto

// // obj.cor = "azul"; //adiciona uma propriedade a um objeto

// // delete obj.idade; //remove uma propriedade de um objeto

// // console.log(obj);

// //  array de objetos - acessando partes da array

// // let cadastro = [
// //   {
// //     nome: "Karynne",
// //     idade: 23,
// //     cidade: "rio de janeiro"
// //   },
// //   {
// //     nome: "Brendom",
// //     idade: 22,
// //     cidade: "rio de janeiro"
// //   },
// //   {
// //     nome: "Leandro",
// //     idade: 30,
// //     cidade: "rio de janeiro"
// //   }
// // ];

// // console.log(cadastro);
// // cadastro[1].cor = "azul"; // adicionando uma nova propriedade
// // cadastro[1].musicas = ["pop", "rock", " trap"];

// // console.log(cadastro[1]);

// // cadastro.unshift({
// //   nome: "Maria Vitória",
// //   idade: 19,
// //   cidade: "rio de janeiro"
// // }); // dessa forma eu consigo adicionar um objeto no inicio da minha array.

// // console.log(cadastro[0]);
// // ]



// //---------------------------
// //OBJETO ---   




// // let objeto ={
// //     nome: `Jésus`, // cada pare é uma pripriedade
// //     idade: 20,
// //     cidade:`Rio de Janeiro`,
// // }
// // console.log(objeto)
// // console.log(objeto.nome)

// // //adicionar algo no objeto. A propriedade é recebida após o ponto
// // objeto.cor = `verde`
// // console.log(objeto)


// // //remorer algo. propriedade delete e o nome do objeto e o nome da propriedade
// // delete objeto.idade 

// // //adicionado uma array em um objeto
// // objeto.estilos = [`jazz`, `eletro`, `samba`]

// // //accessando a 2 informação
// // console.log(objeto.estilos[2])


// // // array de objetos - copiar depois 
// // let cadastro =[

// //     {
// //     nome: `Jésus`, // cada pare é uma pripriedade
// //     idade: 20,
// //     cidade:`Rio de Janeiro`,
// //  },

// //  {
// //     nome: `Vitor`, // cada pare é uma pripriedade
// //     idade: 23,
// //     cidade:`Rio de Janeiro`,
// //  },

// //  {
// //     nome: `Bruna`, // cada pare é uma pripriedade
// //     idade: 20,
// //     cidade:`Rio de Janeiro`,
// //  }

// // ]
// // cadastro[1].notas = 3 // adiciona
// // console.log(cadastro[1])

// // delete cadastro[2].cidade
    



// //  Crie um array que receba 5 itens e exiba no console.
// // Utilize um método para adicionar um nome ao inicio do array.
// // Utilize um método para remover o último nome do array.
// // Utilize um método para adicionar dois nomes ao fim do array.
// // Utilize um método para remover o primeiro nome do array.

// // Utilize um método para organizar em ordem crescente o seguinte array:
// // const num


// // let musica = [`jazz`, `eletro`, `samba`,`metal`, `Rock` ]
// // musica.unshift(`pagode`)

// // console.log(musica.unshift(`pagode`))
// // musica.pop()

// // -----------
// // aula 01/02

// // let musica = [`jazz`, `eletro`, `samba`,`metal`, `Rock` ]

// // if(nomes.lenght <=5){
// //     nomes.splice (1,0,`piseiro`)
// //     console.log(musica)
// // }

// // alert // saida alerta de saida
// // prompt // mensagem n
// // //calculadors
// // let continuar; // variavel vazia, serve pra que

// function calc(
//     num1= Number(prompt ("digite o primeiro valor")),
//     num2=  Number(prompt("digite o segundo valor")),
//     sinal= prompt ("digite o sinal da conta")) 
//     {
//     if (sinal === `+`) {
//         return alert (num1+num2)
//     } else if (sinal === `-`) {
//         return alert (num1 - num2)
//     } else if (sinal === `/`) {
//         return alert (num1 / num2)
//     }else if (sinal === `*`) {
//         return alert (num1 * num2)
//     }
// }

// do{ //executa  o comando
//     calc();
//     continuar = prompt (`deseja continuar ? (sim) ou (não))`) //condicao
// } while (continuar === `sim`) //o prompt vai ser usado sim ou nao para avaliar a condição do loop 



// let cadastro={
//     nome:``,
//     idade:``,
//     cidade:``,
//     nota:``,
// }

// switch (cadastro.nome){
//     case ``:
//         cadastro.nome = Prompt (`digite seu nome`)
//     break; 
// //     deafault:
// //     console.log(`Vazio`)
// // }

// // preencer o nome com logica
// // switch (cadastro.idade){
// //     case ``:
// //         cadastro.idade = Prompt (`digite sua idade`)
// //     break; 
// //     deafault:
// //     console.log(`Vazio`)
// // }
// //---------------------
// //refazer com else/if ou fazer com switch separados

// // switch (cadastro) {
// //     case "":
// //     cadastro.nome = prompt ("Digite seu nome aqui")
// //     console.log(cadastro.nome)
// //     break; 
// //     case "":
// //     cadastro.idade = number(prompt ("Digite sua idade aqui"))
// //     console.log(cadastro.idade)

// //     break; 
// //     case "":
// //     cadastro.cidade = prompt ("Digite cidade aqui")
// //     console.log(cadastro.cidade)
// //     break; 
// //     case "":
// //     cadastro.nota =  number (prompt ("Digite sua nota aqui"))
// //     console.log(cadastro.nota)
// //     break; 
// //     default:
// //     console.log("Vazio")
// //     break;
// //     }

// // console.log(cadastro)


// //aula 03/02/23

// // let corpo = document.body
// // let title = document.querySelector('h1')
// // let photo = document.querySelector('#foto') //capturando pelo id
// // let caixa = document.querySelector('[title~=teste]') //capturando pelo atributo title
// // let [item1, item2, item3, item4] = document.querySelectorAll('li')
// // let lista = document.querySelectorAll('li') //NodeList estatica

// // console.log(item1)



// /* caixa.innerHTML = "<input />" */

// /* const paragraph = "<p>Ola Turma</p>"
// corpo.innerHTML = paragraph */


// function trocar(){
//     if(corpo.style.backgroundColor === 'white'){
//         title.innerText = 'Manoel Gomes'
//         corpo.style.backgroundColor = '#BEBEBE'
//         photo.setAttribute('src', 'https://canetaazuloficial.com.br/wp-content/uploads/2022/08/foto-manoel-sem-fundo2-400x390.png') //subtituindo um atributo
//         photo.setAttribute('alt', 'Manoel Gomes') //subtituindo um atributo
//         item1.innerText = 'Oi Jésus'
//     }else{
//         title.innerText = "Caneta Azul"
//         corpo.style.backgroundColor = 'white'
//         photo.setAttribute('src', 'https://imagensemoldes.com.br/wp-content/uploads/2020/03/Caneta-Bic-Azul-PNG.png')
//     }
// }