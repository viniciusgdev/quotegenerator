import React, { useState } from 'react'
import './RandomQuote.css'
import x_icon from '../Assets/x-logo-white.png'
import reload_icon from '../Assets/twotone_replay_white_48dp.png'

const RandomQuote = () => {

    let quotes = [];

    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }

    const x_twitter = ()=>{
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`)
    }


    const [quote,setQuote] = useState({
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    });


    loadQuotes();



  return (
    <div className='container'>
        <div className="quote">{quote.text}</div>
        <div>
            <div className="line"></div>
            <div className="bottom">
                <div className="author">— {quote.author.split(',')[0]}</div>
                <div className="icons"><img src={reload_icon} onClick={()=>{random()}} alt="" /><img src={x_icon} onClick={()=>(x_twitter())} alt="" /></div>
            </div>
        </div>
      
    </div>
  )
}

export default RandomQuote
