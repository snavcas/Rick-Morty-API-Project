import {nameRickMorty } from "./api/call-to-api.js";
import {nameRickMortyDetail} from "./api/call-to-api-details.js";


nameRickMorty().then((characters) => rickMortyApi(characters));


const allCharacters$$ = document.querySelector(".allCharacters");
const detaiRick$$ = document.querySelector(".detailRick");

/*INTENTO DE CREAR EL BUSCADOR
const searchAll$$ = document.querySelector("#formulario");
const button$$ = document.querySelector("#boton");

const filter = ()=>{

  console.log(searchAll$$.value);

}
button$$.addEventListener("click", () => {
  nameRickMorty ();
  console.log(nameRickMorty);
})*/

  



const rickMortyApi = (characters) => {
  let apiDetails = characters.results;
  console.log(characters);
  //RECORRER EL ARRAY QUE NOS PERMITE ACCEDER A LA INFORMACION
  for (let i = 0; i < apiDetails.length; i++) {
    const element = apiDetails[i];

    //CREAR LOS ELEMENTOS QUE VAN A CONTENER LA INFORMACION QUE QUEREMOS MOSTRAR EN LA LISTA 
    const id$$ = document.createElement("p");
    const name$$ = document.createElement("h3");
    const image$$ = document.createElement("img");
 

    //DAR CONTENIDO A LOS ELEMENTOS
    name$$.textContent = element.name;
    image$$.src = `https://rickandmortyapi.com/api/character/avatar/${i + 1}.jpeg`;
    
    //CREAR UN DIV PARA METER LOS ELEMENTOS CREADOS ANTERIORMENTE QUE YA TIENEN CONTENIDO, DE ESTA FORMA PODER DAR ESTILOS EN CSS. APENDEAR LOS ELEMENTOS AL NUEVO DIV
    const rickDiv = document.createElement("div");
    rickDiv.appendChild(id$$);
    rickDiv.appendChild(name$$);
    rickDiv.appendChild(image$$);

    //DAR UNA NUEVA CLASE AL DIV CREADO PARA DAR ESTILOS EN CSS
    rickDiv.classList.add("rickCard");
    //APENDEAR EL NUEVO DIV CON TODA LA INFORMACION DE LA LISTA AL DIV INICIALMENTE CREADO EN HTML, SE APENDEDAN 20 DIV CON LA CLASE RICKCARD
    allCharacters$$.appendChild(rickDiv);

    //CREAR UN EVENTO QUE MUESTRA LA INFORMACION DETALLADA DE UNA SOLA CARTA
    rickDiv.addEventListener("click", () => {
      nameRickMortyDetail(`${i + 1}`);

      //CREAR LOS ELEMENTOS QUE SE VAN A MOSTAR EN EL EVENTO AL HACER CLICK
      const rickDivDetail = document.createElement("div");
      const species$$ = document.createElement("p");
      const status$$ = document.createElement("p");
      const nameDetail$$ = document.createElement("h3");
      const imageDetail$$ = document.createElement("img");
      
      //APENDEAR LOS ELEMENTOS AL NUEVO DIV CREADO
      rickDivDetail.appendChild(nameDetail$$); 
      rickDivDetail.appendChild(imageDetail$$);
      rickDivDetail.appendChild(species$$);
      rickDivDetail.appendChild(status$$);
      
      //DAR CONTENIDO A CADA ELEMENTO CREADO
      nameDetail$$.textContent = element.name;  
      species$$.textContent ="Specie: " + element.species;
      status$$.textContent ="Status: " + element.status;
      imageDetail$$.src = `https://rickandmortyapi.com/api/character/avatar/${i + 1}.jpeg`;
      //CREAR UNA NUEVA CLASE PARA EL NUEVO DIV QUE SE CREARA CON CADA CLICK A UNA CARTA
      rickDivDetail.classList.add("rickCardDetail");
      //APENDEAR EL NUEVO DIV AL CREADO INICIALMENTE EN EL HTML
      detaiRick$$.appendChild(rickDivDetail);
      //ELIMINAR EL DIV PADRE QUE CONTIENE LA LISTA DE CARTAS AL HACER CLICK, DE MODO QUE SOLO SE MUESTRE LA CARTA SELECCIONADA CON EL DETALLE INCLUIDO
      allCharacters$$.innerHTML = "";


      
    });
    
  }
};









