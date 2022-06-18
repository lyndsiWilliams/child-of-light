import { useState } from 'react';
import './App.css';
import { Status, StatusContext } from './Contexts/StatusContext';
import StatusDisplay from './Components/StatusDisplay';

function App() {
  const [age, setAge] = useState<number>(0);
  const [hunger, setHunger] = useState<number>(0);
  const [mood, setMood] = useState<number>(0);
  const [weight, setWeight] = useState<number>(5);
  const [discipline, setDiscipline] = useState<number>(0);

  const initialStatusContext: Status = {
    age,
    hunger,
    mood,
    weight,
    discipline,
    setAge,
    setHunger,
    setMood,
    setWeight,
    setDiscipline,
  }
  
  return (
    <div className="App">
      <h1>Child of Light</h1>
      <StatusContext.Provider value={initialStatusContext}>
        <StatusDisplay />
      </StatusContext.Provider>
    </div>
  );
}

export default App;
