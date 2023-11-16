
import './App.css';

import { useState, useEffect } from 'react'

function App() {

  const [advice, setAdvice] = useState('');

  useEffect(() => {
    // Function to fetch advice
    const fetchAdvice = async () => {
      try {
        // Make an API call using fetch
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();

    

        setAdvice(data.slip.advice);
      } catch (error) {
        console.error('Error fetching advice:', error);
      }
    };

    // Call the fetchAdvice function
    fetchAdvice();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  const GenerateAdvice = async () => {
    try {
      // Fetch new advice when the "dice" icon is clicked
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();

  

      setAdvice(data.slip.advice);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  return (
    <div className="advice-container">
      <h1>Advice Generator</h1>

      <p>{advice}</p>
      <button className="generate-button" onClick={GenerateAdvice}>
        <span role="img" aria-label="dice">
          🎲
        </span>

      </button>
    </div>
  );
};
export default App;
