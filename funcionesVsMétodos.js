//************* -> capacidades que tienen las funciones al igual que otros objetos <- ***************

//1. Pasar funciones como argumentos -> callback
/*
function a (){}
function b (){}
b(a)
*/

//2. Devolver funciones como resultado de otras funciones
/*
function a(){
    function b(){}
    return b
}
*/

//3. Asignar funciones a variables -> expresion de funciones

/*
const a = function(){}
const b = a
*/
//4. Las funciones pueden tener propiedades

/*
function a(){}
const obj = {}
a.call(obj)
*/
//5. Anidar funciones 
/*
function a()
{
    function b()
    {
        function c()
        {

        }
        c()
    }
    b()
}
a()
*/

//5. Las Funciones en objetos se llaman métodos
const rocket ={
    name : 'falcon 9',
    launchMessage: function launchMessage(){
        console.log('🚀🚀')
    }
}

rocket.launchMessage()