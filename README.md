# tip-calculator-app-main
challenge from frontendmentor.io. https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX

**O objetivo é criar uma calculadora que definirá o valor a ser pago por cada pessoa na conta de um restaurante. Será informado o valor total da conta, o número de pessoas, e a % do valor que será pago a título de gorjeta.** 
**Para executar esse projeto basta executar o arquivo index.html**

 # Arquivo index.html
 * Arquivo básico, onde adiciono a imagem no logo e crio flexbox para organizar o posicionamento dos demais elementos, adicionando botoes, inputs e indicando com classes e id's para melhor organização no CSS.

 # Arquivo style.css
 * adicionei o visual do index e os ajustes do design na página ao ser acessado pelo celular, por meio da adição de media query.

 # Arquivo script.js
  * No início, adicionei os elementos HTML que serão capturados pelo CSS. Após, criei um eventlistener para caputar os valores adicionados no campo bill, ao clicar em cada um dos botões (tipvalue.addEventListener), para realizar o cálculo do valor da gorjeta por pessoa e o valor a ser pago por pessoa. 
  * Criei também uma função que verificará a cada 100ms se o número de pessoas é igual a 0 ou não, adicionando uma classe com um estilo de alerta ao campo de adiconar número de pessoas e indicar uma mensagem de span.
  * Adicionei melhorias no JS para tornar a página mais responsiva visualmente. Criei duas constantes para captar os elementos que seriam resetados pelo reset, e para selecionar todos os botões marcados com a classe 'design-button'. 
  * Após, criei uma função resetOn() que tornará o botão do reset ativo quando os valores dos documentos indicados estiverem preenchidos, por meio de uma verificação ocorrida a cada 100ms pela função setInterval. 
  * Adicioenei a função 'resetButtonsDesign' que resetará o design original dos botoes sempre que for chamada, essa função foi adicionada dentro da função reset e no EventListener quando eu seleciono determinado botao que ele altera esse visual. Por fim, como já comentado, criei a função reset que será chamada quando clicado no botão reset, retornando os valores originais, e um 'for' p ara mapear o índice do botão ao ser clicado e com isso adicionar uma classe a esse botao que mudará o seu visual
