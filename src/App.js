import React, { useEffect, useState } from 'react';
import Header from './components/Header'
import Quotebox from './components/Quotebox';

function App() {

  const [quote, setQuote] = useState({})

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        console.log(`${data.content} —${data.author}`)
        setQuote({ content: data.content, author: data.author })
      })
  }, [])

  const getNewQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        console.log(`${data.content} —${data.author}`)
        setQuote({ content: data.content, author: data.author })
      })
  }

  return (
    <div className="App">
      <Header />
      <Quotebox quote={quote} getNewQuote={getNewQuote} />
    </div>
  );
}

export default App;
