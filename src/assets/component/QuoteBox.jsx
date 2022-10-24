import { useState } from 'react';
import Colors from './Colors';
import users from "../../quotes.json";

const QuoteBox = () => {
  //Esteroides
    const [index, setIndex] = useState(
      Math.floor(Math.random() * users.length)
    );
      //Genramos el usuria aleatorio desde  el .JSON
    const next = () => {
      setIndex(Math.floor(Math.random() * users.length));
    };
    //Traemos un color aleatorio desde el componente Colors.jsx
    const color = Colors[Math.floor(Math.random() * Colors.length)];
    //cambiamos el color de fondo
    document.body.style = `background: ${color}`;
    return (
      <div>
        <div className="card" style={{ color: color }}>
          <div className="header">
            <i className="fa-solid fa-quote-left"></i>
            {/* imprimimos la frase */}
            <p className="phrase">{users[index].quote}</p>
          </div>
          {/* imprimimos en autor */}
          <p>{users[index].author}.</p>
          {/* boton cone l que cambiamos a la siguiente frase aleatoria y color aletorio */}
          <button onClick={next}>
            <i
              className="fa-solid fa-circle-right"
              style={{ color: color }}
            ></i>
          </button>
        </div>
        ;
      </div>
    );
};

export default QuoteBox;