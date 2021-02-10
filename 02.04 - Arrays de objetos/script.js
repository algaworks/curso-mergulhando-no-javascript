var person1 = {
  name: 'Daniel',
  age: 22
}

var person2 = {
  name: 'Rafaela',
  age: 32
}

var person3 = {
  name: 'Caio',
  age: 36
}

var list = [person1, person2, person3]

for (var person of list) {
  console.log(person.name)
}