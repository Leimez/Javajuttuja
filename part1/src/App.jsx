
import { useState } from 'react';
import Statistics from './Statistics'; 

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = all > 0 ? (good - bad) / all : 0;
  const positive = all > 0 ? (good / all) * 100 : 0;

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>statistics</h2>
      {all > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
