//codigo ejecutado en la consola del navegador
const numeroSecreto = Math.floor(Math.random()*10+1); //Math.floor y Math.random generan un numero aleatorio

const numeroJugador= parseInt(prompt('Adivina el numero secreto entre 1 al 10'));
console.log(`Este es el numero que elejiste: ${numeroJugador}`);
if (numeroJugador === numeroSecreto)
    {
    console.log('Adivinaste el numero secreto');
    }

else
    {  
    console.log(`Perdiste, el numero secreto es: ${numeroSecreto}`);
    }

