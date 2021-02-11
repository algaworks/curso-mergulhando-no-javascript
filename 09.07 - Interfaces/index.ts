interface Animal {
  sex: 'male' | 'female'
}

interface Human extends Animal {
  name: string
  age: number
}

const person: Human = {
  age: 22,
  name: 'Lucas',
  sex: 'male'
}