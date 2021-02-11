declare namespace Person {
  type Email = string
  
  export interface Default {
    name: string
    age: number
  }

  export interface WithContacts extends Default {
    contacs: Email[]
  }
}