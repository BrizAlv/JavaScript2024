const greeting = function (name) {
    return `Hi ${name}!`;
}

// función flecha con retorno explicito
const newGreeting = (name) => {
    return `Hi ${name}!`;
}

// funcion flecha con retorno implicito
const newGreetingImplicit = name => `Hi ${name}!`;
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, my mane is ${name} ${name}!`;

//vinculación léxica / lexical binding
const fictionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) =>
        console.log(`${this.name} says: ${message}`)
    
}
fictionalCharacter.messageWithTraditionalFunction('With reat power comes great responsablity.');
fictionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus!');

