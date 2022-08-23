import io from 'socket.io-client';
import {useEffect, useState} from "react";
import './styles/App.css'
import PriceDown from "./components/PriceDown";
import PriceUp from "./components/PriceUp";



function App() {

    const [data, setData] = useState([])
    const socket = io.connect('http://localhost:4000')


    useEffect(() => {
        socket.emit('start');
        socket.on('ticker', function(response) {
            setData(response)
        })},[])



  return (
    <div className="App">
        <div className="main">share price</div>
        {data.map((finance, index) => {
            return <div className = "company" key={index}>
                <span className = "span" style={{background:finance.colors[index]}}>
                    {finance.ticker}
                </span>
                <div className = "company_name">
                  {finance.ticker}
                </div>
                <div className = "money_block">
                    {finance.price + '$'}
                </div>
                <div className = "change">
                  {finance.change > 100 ? <PriceUp/> : <PriceDown />}
                  {finance.change}
                </div>
                <div className = "percent" style={{background:finance.change_percent > 0.5 ? 'lightgreen' : 'pink'}}>
                    {finance.change_percent}%
                </div>
            </div>
        })}
    </div>
  );
}

export default App;
