let expresion = 'papaya';
switch(expresion)
{
    case 'Naranjas':

        console.log('Las naranjas cuestan Qtz.10 la mano');
        break;
    case 'Manzanas': 
        consolejson.log('Las manzanas cuestan Qtz.15 la mano');
        break; 
    case 'Plátano': 
        consolejson.log('Los plátanos cuestan Qtz.10 la docena');
        break; 
    case 'Mangos': 
    case 'Papayas': 
        consolejson.log('Los mangos y las papayas cuestan Qtz.8 la libra');
        break; 
    default:
        console.log(`No contamos con ${expresion}, lo sentimos`);
        break;
}
console.log(`¿Hay algo más que necesites?`);
