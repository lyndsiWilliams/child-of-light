import { useContext } from "react";
import { StatusContext } from '../Contexts/StatusContext';

const StatusDisplay = () => {
  const {
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
  } = useContext(StatusContext);

  return (
    <>
      <h4>Status Display</h4>
      <h6>Age: {age}</h6>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
      <h6>Hunger: {hunger}</h6>
      <button onClick={() => setHunger(hunger + 1)}>Increase Hunger</button>
      <h6>Mood: {mood}</h6>
      <button onClick={() => setMood(mood + 1)}>Increase Mood</button>
      <h6>Weight: {weight}</h6>
      <button onClick={() => setWeight(weight + 1)}>Increase Weight</button>
      <h6>Discipline: {discipline}</h6>
      <button onClick={() => setDiscipline(discipline + 1)}>Increase Discipline</button>
    </>
  );
};

export default StatusDisplay;