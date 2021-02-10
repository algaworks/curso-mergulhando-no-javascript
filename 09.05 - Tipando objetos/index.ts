type Person = {
  name: string
  age: number
  contacts?: string[]
  isAlive: boolean
}

const person: Person = {
  age: 22,
  name: 'Lucas',
  isAlive: true,
  contacts: [
    'daniel.bonifacio@algaworks.com'
  ]
}

const person2: Person = {
  name: 'Joao',
  age: 43,
  isAlive: true
}