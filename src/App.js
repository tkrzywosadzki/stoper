import { useState, useEffect } from 'react';
import Container from './components/Container/Container';
import ConvertTime from './components/ConvertTime/ConvertTime';
import Button from './components/Button/Button';

const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    if(timer) clearInterval(timer);
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 10);
    }, 10))
  };

  const stopTimer = () => {
    clearInterval(timer);
  };

  const resetTimer = () => {
    stopTimer()
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if(timer) clearInterval(timer);
    };
  }, []);


  return (
    <Container>
      <ConvertTime time={time}></ConvertTime>
      <Button onClick={startTimer}>Start</Button>
      <Button onClick={stopTimer}>Stop</Button>
      <Button onClick={resetTimer}>Reset</Button>
    </Container>
  );
};

export default App;
