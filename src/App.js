import React, {useState} from 'react';
import Confetti from 'react-confetti';
import './App.css';


  const App = () => {
    const [showConfetti, setShowConfetti] = useState(false);
    const [showNO, setShowNO] = useState('sorry');

    const handleClick = () => {
      setShowConfetti(true);
    };
    
    
    const handleNo = () => {
      setShowNO(showNO)
    };

  return (
    <div className="App">
    <div>
      
        <h1 className="hstyle">
          I love you! <br />
          Do you Love me Too?
        </h1>
      <div className="btncontain">

        <button className="myButton" onClick={handleClick}>Yes </button>
        {showConfetti && <Confetti />}
        <button className="myButton" onClick={handleNo}>No </button>

      </div>
      
    </div>
    </div>
  );
}

export default App;
