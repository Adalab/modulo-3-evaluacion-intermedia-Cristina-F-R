/* SECCIÓN DE IMPORT */
import { useState } from 'react';
import sentences from '../data/sentences.json'
import '../styles/App.scss';


/* SECCIÓN DEL COMPONENTE */

function App() {

  /* VARIABLES ESTADO (DATOS) */
  
const [filterQuote, setFilterQuote] = useState(' ');
const [character, setCharacter] = useState('Todos');

  /* FUNCIONES HANDLER */
const handleQuoteFilter = (ev) =>{
  setFilterQuote(ev.target.value);

}

const handleCharacterFilter = (ev) =>{
  setCharacter(ev.target.value);
}

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  const renderSentences = () =>{
    return sentences
    .filter((eachSentence) => {
      return (eachSentence.quote.toLocaleLowerCase().includes(filterQuote.toLocaleLowerCase()))
    })
    .filter((eachSentence) => {
      if(character !== 'Todos'){
        return (eachSentence.character.toLocaleLowerCase()===(character.toLocaleLowerCase()))
      }else{
      return eachSentence;
    }})
    .map((eachSentence, index) => (
      <li className='listLi' key={index}>
        <p className='ListLi__quote'>{eachSentence.quote} - </p> 
        <p className='ListLi__name'>{eachSentence.character}</p>
      </li>
    ))
  }

  /* HTML */
  return <div className="App">
    <header>
      <h1>Frases de Friends</h1>
      <form>
        <label htmlFor="quote">
          Filtrar por frase:
        <input 
        type="text" 
        id="quote" 
        placeholder='Escribe una palabra'
        onChange={handleQuoteFilter} 
        value={filterQuote}
        />
        </label>
        <label htmlFor="character">
          Filtrar por personaje:
        <select name="character" id="character" onChange={handleCharacterFilter}>
          <option value="Todos">Todos</option>
          <option value="Ross">Ross</option>
          <option value="Monica">Monica</option>
          <option value="Joey">Joey</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Chandler">Chandler</option>
          <option value="Rachel">Rachel</option>
        </select>
        </label>
      </form>
      </header>
      <main>
        <ul>
          {renderSentences()}
        </ul>
      </main>
    
  </div>;
}

/* EXPORT DEL COMPONENTE */
export default App;
