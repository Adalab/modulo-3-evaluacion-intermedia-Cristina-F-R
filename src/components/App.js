/* SECCIÓN DE IMPORT */
import { useState, useEffect} from 'react';
import sentences from '../data/sentences.json'
import '../styles/App.scss';


/* SECCIÓN DEL COMPONENTE */

function App() {

  /* VARIABLES ESTADO (DATOS) */
const [filterQuote, setFilterQuote] = useState(' ');
const [character, setCharacter] = useState('Todos');
const [newQuote, setNewQuote] = useState({quote:'', character:''});
const [data, setData] = useState(sentences);

  const getDataApi = () => {
    return fetch('https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json')
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
};

useEffect(() => {
      getDataApi()
        .then(data => {
          setData(data);
        });
  }, []);
  


  /* FUNCIONES HANDLER */
const handleQuoteFilter = (ev) =>{
  setFilterQuote(ev.target.value);

}

const handleCharacterFilter = (ev) =>{
  setCharacter(ev.target.value);
}

const handleInputnewQuote = (ev) =>{
  if(ev.target.value !== ''){
  const inputValue = ev.target.value;
  setNewQuote({...newQuote, [ev.target.id]: inputValue})}
}

const handleNewQuote = (ev) => {
  ev.preventDefault();
  setData([...data, newQuote]);
  setNewQuote({quote:'', character:''})
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
        <p className='listLi__quote'>{eachSentence.quote} </p> 
        <p className='listLi__name'>{eachSentence.character}</p>
      </li>
    ))
  }
  
  /* HTML */
  return <div className="App">
    <header className='header'>
      <h1 className='header__title'>Frases de Friends</h1>
      <form className='header__form'>
        <label htmlFor="quote">
          Filtrar por frase:
        <input 
        type="text" 
        id="quote" 
        placeholder='Escribe una palabra'
        className='header__form_input'
        onChange={handleQuoteFilter} 
        value={filterQuote}
        />
        </label>
        <label htmlFor="character">
          Filtrar por personaje:
        <select name="character" id="character" className='header__form_input' onChange={handleCharacterFilter} value={character}>
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
      <main className='main'>
        <section className='main__quotes'>
          <ul className='=main__quotes_ul'>
            {renderSentences()}
          </ul>
        </section>
        <section>
          <h2>Añadir una nueva frase:</h2>
          <form action="" className='main__addQuote'>
            <label htmlFor="newquote" > Frase:
              <input type="text" id="quote" className="inputformAdd quote" onChange={handleInputnewQuote} value={newQuote.quote}/>
            </label>
          <select name="newCharacter" id="character"  className="inputformAdd" onChange={handleInputnewQuote} value={newQuote.character}>
            <option value="Ross" name='character' className="inputformAdd">Ross</option>
            <option value="Monica"name='character' className="inputformAdd">Monica</option>
            <option value="Joey" name='character' className="inputformAdd">Joey</option>
            <option value="Phoebe" name='character' className="inputformAdd">Phoebe</option>
            <option value="Chandler" name='character' className="inputformAdd">Chandler</option>
            <option value="Rachel" name='character' className="inputformAdd">Rachel</option>
          </select>
          <input type="submit" value="Añade una nueva frase" className="btnform" onClick={handleNewQuote}/>
          </form>
        </section>
      </main>
    
  </div>;
}

/* EXPORT DEL COMPONENTE */
export default App;
