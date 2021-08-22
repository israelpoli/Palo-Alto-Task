import './App.css';
import './card.css';
import { useEffect, useState } from 'react';
import Card from './card';


function App() {


  const [data, setData] = useState({ data: null, isRedy: false });
  const [all_data, setAll_data] = useState(false);
  const [errors, setErrors] = useState(false);

  function imp_data() {
    fetch("http://localhost:8080/GET").then((res) => res.json()).then((resp) => setData({ data: resp, isRedy: true }));
  }

  const alldata = () => {
    setAll_data(true);
  }

  const err = () => {
    setErrors(true);
  }

  useEffect(() => {
    imp_data();
    <Card data={data.data} isRedy={data.isRedy} />
  }, [data.isRedy])

  if (!data.isRedy) {
    return (
      <h1>israel</h1>
    )
  }
  return (
    <div>

      {(!all_data && !errors) ? <div className='grid-buttons'>
        <button className="options" onClick={alldata}>ALL DATA </button>
        <button className="options" onClick={err}>ERRORS</button>
      </div> : null}

      {all_data ? <Card data={data.data} isRedy={data.isRedy} flag={false} /> : null}

      {errors ? <Card data={data.data} isRedy={data.isRedy} flag={true} /> : null}


    </div >
  );
}

export default App;
