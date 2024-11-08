
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {

  const [eventList, setEventList] = useState([1]);
  const [value, setValue] = useState(2);

  const increaseEvent = () => {
    setValue(value + 1);
    setEventList([...eventList, value]);
    console.log(eventList);
  }

  return (
    <>
      <Navbar addEvent={increaseEvent} />
      <Home data={eventList} />
    </>


  );
}

export default App;
