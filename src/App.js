import './App.css';
import './card.css';
import { useEffect, useState } from 'react';
import Card from './card';


function App() {


  const [data, setData] = useState({ data: null, isRedy: false });

  function imp_data() {
    fetch("http://localhost:8080/GET").then((res) => res.json()).then((resp) => setData({ data: resp, isRedy: true }));
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

      <Card data={data.data} flag={true} />

    </div >
  );
}

export default App;
