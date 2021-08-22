import './App.css';
import './card.css';
import { useEffect, useState } from 'react';
import Card from './card';


function App() {


  const [data, setData] = useState({ data: null, isRedy: false });
  const [all_data, setAll_data] = useState(false);
  const [partial_data, setPartial_data] = useState(false);

  function imp_data() {
    fetch("http://localhost:8080/GET").then((res) => res.json()).then((resp) => setData({ data: resp, isRedy: true }));
  }

  const alldata = () => {
    setAll_data(true);
  }

  const partialData = () => {
    setPartial_data(true);
  }

  useEffect(() => {
    imp_data();
    <Card data={data.data} isRedy={data.isRedy} />
  }, [data.isRedy])

  if (!data.isRedy) {
    return (
      <h1>No data, check if the server is running</h1>
    )
  }
  return (
    <div>

      {(!all_data && !partial_data) ? <div className='grid-buttons'>
        <button className="options" onClick={alldata}>ALL DATA </button>
        <button className="options" onClick={partialData}>PARTIAL DATA</button>
      </div> : null}

      {partial_data ? <Card data={data.data} flag={false} /> : null}

      {all_data ? <Card data={data.data} flag={true} /> : null}


    </div >
  );
}

export default App;
