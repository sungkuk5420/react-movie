import {useState, useEffect} from "react"


function App() {
  const [loading,setLoading] = useState(true);
  const [coins,setCoins] = useState([])

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers").then(result=>result.json()).then(json=>{
      console.log(json)
      setCoins(json);
      setLoading(false);
    });
  },[])
  return (
    <div >
      <h1>The Coins! ({coins.length})</h1>
      {loading?<strong>Loading...</strong>:null}
      <ul>
        {coins?coins.map((item,index)=>(
          <li key={index}>{item.name} ({item.symbol}) : $ {item.quotes.USD.price}</li>
        )):null}
      </ul>
    </div>
  );
}

export default App;
