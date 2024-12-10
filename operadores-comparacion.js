//operadores de comparación

/* 

== //comparan si algo es igual a otra cosa
=== //usar preferentemente, valida si es igual el tipo y el valor entre dos variables
!= //compara si el valor es diferente de
!== //compara si el valor y tipo son diferetes entre dos variables
> //compara si un valor es mayor que otro
< //compares si un valor es menor que otro
>= //compara si un valor es mayor o igual que otro
<= //compara si un valor es menor o igual que otro

*/

const a = 10
const b = 20
const c = '10'

//console.log('********   a==b   *************')//false
r= a==b
//console.log(r)

//console.log('********   a===c   *************')//false
r= a===c
//console.log(r)

//console.log('********   a!=b   *************')//true
r= a!=b
//console.log(r)

//console.log('********   a!==b   *************')//true
r= a!==b
//console.log(r)

//console.log('********   a>b   *************')//false
r= a>b
//console.log(r)

//console.log('********   a<=b   *************')//true
r= a<=b
//console.log(r)

//console.log('********   a>c   *************')//false
r= a>c
//console.log(r)