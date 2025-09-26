# # Somar Números Ímpares

Repositório para uma função simples que soma todos os números ímpares entre dois valores (inclusive), em JavaScript.

---

## Índice

- [Sobre](#sobre)  
- [Como usar](#como-usar)  
- [Exemplo](#exemplo)  
- [Como contribuir](#como-contribuir)  
- [Licença](#licença)  

---

## Sobre

Esse projeto contém uma função que:

- recebe dois números (`num1` e `num2`)  
- identifica todos os inteiros ímpares entre esses dois valores  
- soma esses números e retorna o resultado  

É útil para exercícios, aprendizado de lógica, e demonstração de controle de fluxo em JavaScript.

---

## Como usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/assislol2024/somarNumerosImpares.git
Acesse a pasta:

bash
Copiar código
cd somarNumerosImpares
Rode o arquivo JavaScript (usando Node.js, por exemplo):

bash
Copiar código
node SomarNumImpares.js
Dentro do arquivo, você pode modificar os valores de entrada (n1 e n2) para testar outros intervalos.

Exemplo
js
Copiar código
let n1 = 55;
let n2 = 20;

function somarImpares(num1, num2) {
    let soma = 0;
    if (num1 > num2) {
        for (let i = num1; i >= num2; i--) {
            if (i % 2 !== 0) soma += i;
        }
    } else {
        for (let i = num1; i <= num2; i++) {
            if (i % 2 !== 0) soma += i;
        }
    }
    return soma;
}

console.log(somarImpares(n1, n2));  // saída esperada: 684
Como contribuir
Se quiser contribuir:

Faça um fork do repositório

Crie uma branch para sua feature ou correção (git checkout -b minha-nova-feature)

Faça commits com mensagens claras

Abra um pull request

Sugestões de melhorias que podem ser feitas:

Validar se os parâmetros são números

Lidar com casos em que os números sejam negativos

Permitir passo (step) customizado, por exemplo somar ímpares de 5 em 5

Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

yaml
Copiar código

---

Se quiser, posso gerar pra ti um README com badges (versão, teste, etc.), ou em português mais formal, ou ainda colocar imagens — como prefere?
::contentReference[oaicite:0]{index=0}
