import React, {useState} from 'react';
import './App.scss';
import animeQuotes from './AnimeQuote';
import iro from './Colors';
import { MdAutoAwesome } from "react-icons/md";
import { FaBolt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiFlyingDagger } from "react-icons/gi";

function App() {
  const [randomInt, setRandomInt] = useState(0)
  const [randColIdx, setRandColIdx] = useState(0)
  const randInt = () => {
  setRandomInt( Math.floor(Math.random() * animeQuotes.length))
  setRandColIdx( Math.floor(Math.random() * iro.length))
}



  const [quote, setQuote] = useState("Welcome To The Random Quote Generator");
  const [speaker, setSpeaker] = useState("イアン");
  const [anime, setAnime] = useState()
  const [year, setYear] = useState()
  const[bkgColor, setBkgColor] = useState("darkblue")
  const fetchRandomColor = () => {
    setBkgColor(iro[randColIdx])
  }
const fetchRandomQuote = () => {
  setQuote(animeQuotes[randomInt].quote)
  setSpeaker(animeQuotes[randomInt].speaker)
  setAnime(animeQuotes[randomInt].anime)
  setYear(animeQuotes[randomInt].year)
  fetchRandomColor()
  randInt()
}

/*const quotesArr = [{
  quote: "Prepare To Be Inspired By Anime",
  author: "Ian"
}]*/
  

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: bkgColor, color: bkgColor}}>
       {/*<h2>Random Number: {randomInt} </h2>*/} 
  <div id="quote-box">
 
        <blockquote id='text' style={{color: bkgColor}}>

           <FaBolt fontSize=" 1.5em" />   {quote}     <FaBolt fontSize="1.5em"/>
        </blockquote>
        
       <p id='author' style={{color: bkgColor}}>     <MdAutoAwesome />{speaker}<MdAutoAwesome /></p> 
       <div className='anime-label'><span  style={{color: bkgColor}}>{anime}</span></div>

       <div className='year-label'><span  style={{color: bkgColor}}>{year}</span></div>
       <button id='new-quote' style={{backgroundColor: bkgColor,  color: 'white'}}  title='Elevate Yourself' onClick = {fetchRandomQuote}> <GiFlyingDagger/> </button>
      <div className='tweet-butt'> 
      <a id='tweet-quote' style={{backgroundColor: bkgColor }} target='_blank' rel='noreferrer' href={encodeURI(`https://twitter.com/intent/tweet?text=${quote} -${speaker}`)} title='Tweet Me'><FaXTwitter/></a>
      </div>
       </div>
      
             
      
       </header>
    </div>
  );
}

export default App;
