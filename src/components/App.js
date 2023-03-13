/* SECCIÓN DE IMPORT */

// - De React
import { useState } from 'react';
// - Nuestros
import sentences from '../data/sentences.json'
// - Sass
import '../styles/App.scss';
// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
const [filterQuote, setFilterQuote] = useState(' ');

  /* FUNCIONES HANDLER */
const handleQuoteFilter = (ev) =>{
  setFilterQuote(ev.target.value);

}
  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  const renderSentences = () =>{
    return sentences
    .filter((eachSentence) => {
      return (eachSentence.quote.toLocaleLowerCase().includes(filterQuote.toLocaleLowerCase() ||
      eachSentence.quote.toLocaleLowerCase().includes(filterQuote.toLocaleLowerCase())))
    })
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
        <label htmlFor="porFrase">
          Filtrar por frase:
        <input 
        type="text" 
        id="porFrase" 
        placeholder='Escribe una palabra'
        onChange={handleQuoteFilter} 
        // value={}
        />
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

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
