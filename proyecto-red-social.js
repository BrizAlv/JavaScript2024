const readlineSync = require('readline-sync');

const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta más el café que el té",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];

const username = readlineSync.question('Cuál es tu usuario? ');
const password = readlineSync.question('Cuál es tu contraseña? ', {
  hideEchoBack: true // Oculta la entrada de la contraseña
});

function usuarioExistente(username, password) {
  for (let i = 0; i < usersDatabase.length; i++) {
    if (
      usersDatabase[i].username === username &&
      usersDatabase[i].password === password
    ) {
      return true;
    }  
  }
  return false;
}

function signIn(username, password) {
  if (usuarioExistente(username, password)) {
    console.log(`Bienvenido a tu red social ${username}`);
    console.log(usersTimeline);
  } else {
    console.log('Usuario o contraseña incorrecta');
  }
}

signIn(username, password);