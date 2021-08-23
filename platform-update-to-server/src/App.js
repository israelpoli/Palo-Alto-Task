import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './up_to_server.css'
import FormForData from './form_for_server';
import FromJson from './from_json';


function App() {

  const [fromJson, setFromJson] = useState(false);
  const [manually, setManually] = useState(false);


  const clickf = () => {
    setFromJson(true);
  }
  const clickm = () => {
    setManually(true);
  }



  return (
    <div className="App">
      <header className="App-header">

        {(!fromJson && !manually) ? <div className='grid-buttons'>
          <button className="options" onClick={clickf}>FROM JSON </button>
          <button className="options" onClick={clickm}>MANUALLY </button>
        </div> : null}

        {fromJson ? <FromJson /> : null}

        {manually ? <FormForData /> : null}

      </header>
    </div>
  );
}

export default App;
