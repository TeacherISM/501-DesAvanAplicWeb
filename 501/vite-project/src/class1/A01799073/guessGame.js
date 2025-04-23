// Lista de frases
const frases = [
    'SUELTENME!!!!!',
    'Ya me quiero ir',
    'Hoy vamos a rumbear o no?',
    'Wacho, eres malisimo',
    'La mejor bebida del cine es el Ice de Venom',
    'Wukong',
    'Mezcal o Vodka',
    'Ya se necesitan unas vacaciones y dormir',
    'Vete a dormir',
    'Medicate, por favor'
  ];
  
  let randomPhrase = "";
  let guess = "";
  
  // Selecciona una frase aleatoria al cargar la página
  function randomizePhrase() {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById("frase-random").textContent = fraseAleatoria;
    randomPhrase = fraseAleatoria;
  }
  
  // Botón para elegir 'corta' o 'larga'
  function setGuess(tipo) {
    guess = tipo;
  }
  
  // Contar palabras
  function countWords(str) {
    return str.trim().split(/\s+/).length;
  }
  
  // Verificar respuesta
  function checkGuess() {
    if (!guess) {
      document.getElementById("feedback").textContent = "Selecciona 'corta' o 'larga'.";
      return;
    }
    const length = countWords(randomPhrase);
    const actual = length > 5 ? 'larga' : 'corta';
  
    if (guess === actual) {
      document.getElementById("feedback").textContent = "¡Correcto! Redirigiendo... 🎉";
      setTimeout(() => {
        window.location.href = "";
      }, 3000);
    } else {
      document.getElementById("feedback").textContent = `GG F, la frase era ${actual}. ¡Intenta de nuevo!`;
    }
  }
  
  // Inicializa frase random al cargar
  window.onload = randomizePhrase;
  