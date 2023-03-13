/* SECCIÓN DE IMPORT */

// - De React
// - Nuestros
import sentences from '../data/sentences.json'
// - Sass
import '../styles/App.scss';
// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */


  /* FUNCIONES HANDLER */

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  const renderSentences = () =>{
    return sentences 
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
      <main>
        <ul>
          {renderSentences()}
        </ul>
      </main>
    </header>
  </div>;
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
