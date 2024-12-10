/* Operadores Lógicos
&&  //y
||  //o
!   //no /negación
*/
const a = 10
const b = 20
const c = '10'

console.log('********   a==b y a===c  *************')//false
r= a==b && a===c
console.log(r)

console.log('********   a!=b ó a===c  *************')//true
r= a!=b || a===c
console.log(r)

console.log('******** a es diferente en tipo y valor a c *************')
r= !(a === c)
console.log(r)