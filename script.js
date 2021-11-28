/*

Atribui um número aleatório entre 1 e 100, calculado usando um algoritmo matemático.

*/

var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

/*

Guarda uma referência para os parágrafos resultantes em nosso HTML, e são usadas para inserir valores nos parágrafos no código.

*/

var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');

/*

Armazenam referências para o campo de texto e o botão de envio e são usados para controlar o envio do palpite.

*/

var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

/*

A primeira é usada para armazenar a contagem dos palpites do usuário, e a segunda é uma referência para o botão de reset.

*/

var contagemPalpites = 1;
var botaoReinicio;
campoPalpite.focus();

function conferirPaplite(){
    var palpiteUsuario = Number(campoPalpite.value); //declara uma variável chamada palpiteUsuario e define seu valor igual ao valor inserido pelo jogador no campo de texto. Nós também rodamos esse valor através do método embutido Number(), apenas para ter certeza de que o valor inserido é um número.
    if (contagemPalpites === 1){ //A forma mais simples de um bloco condicional começa com a palavra chave if, depois os parênteses, depois as chaves. Dentro dos parênteses nós incluímos um teste. Se o teste retornar true(verdadeiro), o código dentro das chaves é executado. Caso contrário, não é executado, e seguimos para a próxima parte do código. Neste caso, o teste está verificando se a variável contagemPalpites é igual a 1 (isto é, se essa é ou não a primeira tentativa do jogador)
        palpites.textContent = 'Palpites anteriores: ' //Se a condição for verdadeira, nós tornamos o conteúdo do parágrafo de palpites, <p class="palpites"></p> igual a "Palpites anteriores: ". Caso contrário, o texto não é exibido.
    }
    palpites.textContent += palpiteUsuario + '  '; //acrescenta o valor atual de palpiteUsuario ao final do parágrafo palpites, mais um espaço em branco para que haja espaçamento entre cada palpite mostrado.

    /*
    O primeiro if(){ } confere se o palpite do jogador é igual ao número aleatório (numeroAleatorio) definido no topo do nosso JavaScript. Se for, o jogador adivinhou corretamente o número e venceu o jogo. Então mostramos ao jogador uma mensagem de parabenização com uma agradável cor verde, limpamos o conteúdo do parágrado que informa sobre o palpite ser alto ou baixo <p class="baixoOuAlto"></p>, e executamos uma função chamada configFimDeJogo(), que iremos discutir mais tarde.    
    */
    if (palpiteUsuario === numeroAleatorio){
        ultimoResultado.textContent = `Parabéns! Você acertou em ${contagemPalpites} tentativas!`;
        ultimoResultado.style.backgroundColor = 'green';
        ultimoResultado.style.borderRadius = '5px';
        ultimoResultado.style.textAlign = 'center';
        ultimoResultado.style.padding = '25px';

        baixoOuAlto.textContent = '';
        configFimDeJogo();

     /*
     Agora nós encadeamos outro teste ao final deste anterior usando uma estrutura else if(){ }. Este confere se o palpite do jogador é sua última tentativa. Se for, o programa faz o mesmo que no bloco anterior, porém com uma mensagem de fim de jogo ao invés do texto de parabeninzação.     
     */   
    }else if (contagemPalpites===10){
        ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
        ultimoResultado.style.borderRadius = '5px';
        ultimoResultado.style.textAlign = 'center';
        ultimoResultado.style.padding = '25px';
        baixoOuAlto.textContent = '';
        configFimDeJogo();

    /*
    O bloco final encadeado ao final do código (else { }) contém código que só é executado se nenhum dos outros dois testes retornar verdadeiro (ou seja, o jogador não acertou o número, porém ainda tem mais tentativas restantes). Neste caso nós dizemos a ele que está errado, e então rodamos outro teste condicional para checar se o palpite foi maior ou menor do que a resposta certa, exibindo então uma mensagem apropriada para informá-lo se foi maior ou menor.
    */    


    }else{
        ultimoResultado.textContent = 'Errado!';
        ultimoResultado.style.backgroundColor = 'red';
        ultimoResultado.style.fontWeight='bold';
        ultimoResultado.style.borderRadius = '5px';
        ultimoResultado.style.textAlign = 'center';
        ultimoResultado.style.padding = '25px';
        if (palpiteUsuario < numeroAleatorio){
            baixoOuAlto.textContent = 'Seu palpite está muito baixo!';            
        }else if(palpiteUsuario > numeroAleatorio){
            baixoOuAlto.textContent = 'Seu palpite está muito alto!';
        }
    }

    /*
    As próximas três linhas da função nos deixa preparados para o próximo palpite ser submetido. Nós somamos 1 à variável contagemPalpites para que o jogador use sua tentativa (++ é uma operação de incremento — incrementa em 1), e o campo de texto do formulário de inserção seja esvaziado e focado novamente, pronto para que o próximo palpite seja inserido.

    */

    contagemPalpites++;
    campoPalpite.value='';
    campoPalpite.focus();
}

/*Os construtores que monitoram os acontecimentos de eventos são chamados de event listeners, e os blocos de código executados em resposta ao acontecimento do evento são chamados de event handlers.*/

/*Aqui nós estamos adicionando um event listener ao botão envioPalpite. Esse é um método que aceita a inserção de dois valores (chamados de argumentos) — o tipo de envento que estamos monitorando (neste caso o evento click) como um string (sequência de texto), e o código que queremos executar quando o evento ocorrer (neste caso a função conferirPalpite() — note que não temos que especificar os parênteses quando estivermos escrevendo dentro de addEventListener()).*/

envioPalpite.addEventListener('click', conferirPaplite);
/*
As primeiras duas linhas desabilitam a entrada de texto do formulário e o clique do botão, definindo a propriedade disabled (desabilitado) de cada um como true (verdadeiro). Isso é necessário, pois se não o fizermos, o usuário poderia submeter mais palpites depois do jogo ter terminado, o que iria bagunçar as coisas.
*/
function configFimDeJogo(){
    campoPalpite.disabled=true;
    envioPalpite.disabled=true;
    
/*
As próximas três linhas geram um novo elemento <button>, define o texto de seu rótulo como "Iniciar novo jogo", e o adiciona ao final do nosso HTML existente.
*/    
    botaoReinicio=document.createElement('button');
    botaoReinicio.textContent='Iniciar novo jogo';   
    botaoReinicio.style.backgroundColor=('green');
    botaoReinicio.style.color=('white');
    botaoReinicio.style.cursor=('pointer');
    botaoReinicio.style.padding=('15px');
    botaoReinicio.style.border=('none');
    botaoReinicio.style.fontSize=('12pt');
    botaoReinicio.style.fontWeight=('bold');
    botaoReinicio.style.borderRadius=('5px');
    envioPalpite.style.cursor=('default');

    
    document.body.appendChild(botaoReinicio);
/*
A linha final define um monitor de evento (event listener) em nosso botão, para que quando seja clicado, uma função chamada reiniciarJogo() seja executada.
*/    
    botaoReinicio.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo(){
    contagemPalpites=1; //Coloca o valor da variável contagemPalpites novamente igual a 1.

    var reiniciarParas=document.querySelectorAll('.resultadoParas p'); 
    for (var i=0; i<reiniciarParas.length; i++){
        reiniciarParas[i].textContent=''; //Limpa todos os parágrafos de informativos.
    }

    botaoReinicio.parentNode.removeChild(botaoReinicio); //Remove o botão reset do nosso código.

    /*Habilita os elementos do formulários, esvazia e direciona o foco ao campo de texto, pronto para que um novo palpite seja inserido.*/

    campoPalpite.disabled=false;
    envioPalpite.disabled=false;
    envioPalpite.style.cursor=('pointer');
    campoPalpite.value='';
    campoPalpite.focus();

    ultimoResultado.style.backgroundColor='white'; //Remove a cor de fundo do parágrafo ultimoResultado.

    numeroAleatorio=Math.floor(Math.random()*100) +1; //Gera um novo número aleatório para que o jogador não esteja tentando adivinhar o mesmo número novamente!
}
