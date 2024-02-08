const perguntas = [
  {
    pergunta: 'Qual é a função do operador "+" em JavaScript?',
    respostas: [
      'Concatenar strings',
      'Realizar adição numérica',
      'Ambas as opções anteriores'
    ],
    correta: 2
  },
  {
    pergunta: 'O que é uma variável em JavaScript?',
    respostas: [
      'Um tipo de dado',
      'Um contêiner para armazenar valores',
      'Uma função pré-definida'
    ],
    correta: 1
  },
  {
    pergunta: 'O que significa o termo "DOM"?',
    respostas: [
      'Documento Orientado a Modelos',
      'Modelo de Objeto do Documento',
      'Documento de Objeto Manipulável'
    ],
    correta: 1
  },
  {
    pergunta: 'Qual é a função do operador "===" em JavaScript?',
    respostas: [
      'Comparação estrita de valores e tipos',
      'Atribuição de valores',
      'Comparação de valores apenas'
    ],
    correta: 0
  },
  {
    pergunta: 'O que é uma função em JavaScript?',
    respostas: [
      'Um tipo de dado',
      'Um tipo de laço de repetição',
      'Um bloco de código reutilizável'
    ],
    correta: 2
  },
  {
    pergunta: 'Qual é a maneira correta de declarar uma variável em JavaScript?',
    respostas: [
      'let myVar = 10;',
      'variável myVar = 10;',
      'const myVar: int = 10;'
    ],
    correta: 0
  },
  {
    pergunta: 'O que faz o método "querySelector"?',
    respostas: [
      'Seleciona o primeiro elemento que corresponde a um seletor CSS especificado',
      'Seleciona todos os elementos que correspondem a um seletor CSS especificado',
      'Seleciona um elemento aleatório da página'
    ],
    correta: 0
  },
  {
    pergunta: 'Qual é a função do método "addEventListener"?',
    respostas: [
      'Adiciona um evento a um elemento do DOM',
      'Remove um evento de um elemento do DOM',
      'Cria um novo elemento no DOM'
    ],
    correta: 0
  },
  {
    pergunta: 'O que é uma "callback" em JavaScript?',
    respostas: [
      'Um tipo especial de variável',
      'Uma função passada como argumento para outra função',
      'Um método de iteração sobre arrays'
    ],
    correta: 1
  },
  {
    pergunta: 'Qual é a diferença entre "let" e "const" na declaração de variáveis?',
    respostas: [
      'let pode ser reatribuído, enquanto const não pode',
      'const pode ser reatribuído, enquanto let não pode',
      'Não há diferença entre eles'
    ],
    correta: 0
  }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      
      if(estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  quiz.appendChild(quizItem)
}