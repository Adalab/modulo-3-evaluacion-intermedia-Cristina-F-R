/* SECCIÓN DE IMPORT */
import { useState } from 'react';
import sentences from '../data/sentences.json'
import '../styles/App.scss';


/* SECCIÓN DEL COMPONENTE */

function App() {

  /* VARIABLES ESTADO (DATOS) */
  
const [filterQuote, setFilterQuote] = useState(' ');
const [character, setCharacter] = useState('Todos');
const [newQuote, setNewQuote] = useState({quote:'', character:''});
const [data, setData] = useState(sentences);

  /* FUNCIONES HANDLER */
const handleQuoteFilter = (ev) =>{
  setFilterQuote(ev.target.value);

}

const handleCharacterFilter = (ev) =>{
  setCharacter(ev.target.value);
}

const handleInputnewQuote = (ev) =>{
  const inputValue = ev.target.value;
  setNewQuote({...newQuote, [ev.target.id]: inputValue})
}
const handleNewQuote = (ev) => {
  ev.preventDefault();
  setData([...data, newQuote]);
}

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  const renderSentences = () =>{
    return data
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
        <section>
          <ul>
            {renderSentences()}
          </ul>
        </section>
        <section>
          <h2>Añadir una nueva frase:</h2>
          <form action="">
            <label htmlFor="newquote"> Frase:
              <input type="text" id="quote" onChange={handleInputnewQuote}/>
            </label>
          <select name="newCharacter" id="character"  onChange={handleInputnewQuote}>
            <option value="Ross" name='character'>Ross</option>
            <option value="Monica"name='character'>Monica</option>
            <option value="Joey" name='character'>Joey</option>
            <option value="Phoebe" name='character'>Phoebe</option>
            <option value="Chandler" name='character'>Chandler</option>
            <option value="Rachel" name='character'>Rachel</option>
          </select>
          <input type="submit" value="Añade una nueva frase" onClick={handleNewQuote}/>
          </form>
        </section>
      </main>
    
  </div>;
}

/* EXPORT DEL COMPONENTE */
export default App;
