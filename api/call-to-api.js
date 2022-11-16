

function nameRickMorty() {
  
    return  fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
  }

  export {nameRickMorty};
  