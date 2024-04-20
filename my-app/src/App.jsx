import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [quotes, setQuotes] = useState([]);

  useEffect(() => {      
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div className="App">
      <h1>Random Quotes</h1>
      <div className="quote-container">
        {quotes.map((quote, index) => (
          <p key={index} className="quote">
            <strong>{quote.author}</strong>: <br/>
            {quote.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
