# tip-calculator-app-main
challenge from frontendmentor.io


 #Arquivo script.js

 Adicionei melhorias no JS para tornar a página mais responsiva visualmente. Inicialmente criei duas constantes para captar os elementos que seriam resetados pelo reset, e para selecionar todos os botões marcados com a classe 'design-button'. Após, criei uma função resetOn() que tornará o botão do reset ativo quando os valores dos documentos indicados estiverem preenchidos, por meio de uma verificação ocorrida a cada 100ms pela função setInterval. Adicioenei a função 'resetButtonsDesign' que resetará o 
design original dos botoes sempre que for chamada, essa função foi adicionada dentro da função reset e no EventListener quando eu seleciono determinado botao que ele altera esse visual. Por fim, como já comentado, criei a função reset que será chamada quando clicado no botão reset, retornando os vlaores originais, e um 'for' p ara mapear o índice do botão ao ser clicado e com isso adicionar uma classe a esse botao que mudará o seu visual
