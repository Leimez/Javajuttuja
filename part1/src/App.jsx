import { useState } from 'react';
import Button from './Button';
import Statistics from './Statistics';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selected, setSelected] = useState(0); 
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0)); 

  const all = good + neutral + bad;
  const average = all > 0 ? (good - bad) / all : 0;
  const positive = all > 0 ? (good / all) * 100 : 0;

  const randomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex); 
  };

  const voteAnecdote = () => {
    const copy = [...votes];
    copy[selected] += 1; 
    setVotes(copy); 
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      
      <h2>statistics</h2>
      {all > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
      ) : (
        <p>No feedback given</p>
      )}

      <h2>Anecdote</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={randomAnecdote} text="show random anecdote" />
      <Button onClick={voteAnecdote} text="vote" />
    </div>
  );
};

export default App;



