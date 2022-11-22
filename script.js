const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

for (let i = 0; i < filmes.length; i++) {
  console.log(
    `\n${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}.\nElenco: ${filmes[2].elenco[0]}, ${filmes[2].elenco[1]}, ${filmes[2].elenco[2]} e ${filmes[2].elenco[3]}.\n\n`
  )
}

console.log(`=============`)

for (let filme in filmes) {
  console.log(
    `\n${filmes[filme].titulo}, de ${filmes[filme].ano}, dirigido por ${filmes[filme].diretor}.\nElenco: ${filmes[2].elenco[0]}, ${filmes[2].elenco[1]}, ${filmes[2].elenco[2]} e ${filmes[2].elenco[3]}.\n\n`
  )
}

console.log(`=============`)

for (let filmeProp in filmes) {
  for (let filmePropValor of filmes[filmeProp].elenco) {
    console.log(`Elenco: ${filmes[filmeProp].elenco}`)
  }
}

console.log(`=============`)

for (let f in filmes) {
  for (let prop of filmes[f].elenco) {
    console.log(`${prop}`)
  }
}

console.log(`=============`)

let tituloDosFilmes = filmes.map((filme) => filme.titulo)
console.log(tituloDosFilmes)

for (let titulo of tituloDosFilmes) {
  console.log(`${titulo}`)
}

console.log(`=============`)

for (let index = 0; index < filmes.length; index++) {
  console.log(filmes[index])
}

console.log(`=============`)
