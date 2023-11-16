
import './App.css';
import dice from '../src/images/icon-dice.svg'
import divider from '../src/images/pattern-divider-desktop.svg'

import { useState, useEffect } from 'react'

function App() {

  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState('');

  useEffect(() => {
    // Function to fetch advice
    const fetchAdvice = async () => {
      try {
        // Make an API call using fetch
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();



        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
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
      console.log(data)



      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  return (
    <div className="advice-container">



      <div className='advice-content'>
        <div className='advice-header'>
          <h1>Advice</h1>
          <h1> #{adviceId} </h1>
        </div>

        <p>{advice}</p>



        <div className='divider'>
          <img src={divider} alt="Logo" />;

        </div>



        <button className="generate-button" onClick={GenerateAdvice}>

          <img src={dice} alt="dice" />;
        </button>

      </div>
    </div>
  );
};
export default App;
