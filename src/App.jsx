import { useState } from 'react';

const instrumenty = [
  "Gitara",
  "Pianino",
  "Skrzypce",
  "Perkusja",
  "Flet",
];

function Pozycja({ nazwa }) {
  return <li>{nazwa}</li>;
}

export default function App() {

  const [imieNazwisko, setImieNazwisko] = useState('');
  const [numerInstrumentu, setNumerInstrumentu] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Imię i nazwisko:", imieNazwisko);
    const index = Number(numerInstrumentu) - 1;

    if (index >= 0 && index < instrumenty.length) {
      console.log("Wybrany instrument:", instrumenty[index]);
    } else {
      console.log("Nieprawidłowy numer instrumentu muzycznego");
    }
  };

  return (
    <div>
      {/* Nagłówek */}
      <h1>Liczba instrumentów muzycznych: {instrumenty.length}</h1>

      {/* Lista pozycji */}
      <ol>
        {instrumenty.map((pozycja, index) => (
          <Pozycja key={index} nazwa={pozycja} />
        ))}
      </ol>

      {/* Formularz */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Imię i nazwisko: </label>
          <input
            type="text"
            value={imieNazwisko}
            onChange={(e) => setImieNazwisko(e.target.value)}
          />
        </div>

        <div>
          <label>Numer instrumentu muzycznego: </label>
          <input
            type="number"
            value={numerInstrumentu}
            onChange={(e) => setNumerInstrumentu(e.target.value)}
          />
        </div>

        <button type="submit">Zatwierdź wybór</button>
      </form>
    </div>
  );
}