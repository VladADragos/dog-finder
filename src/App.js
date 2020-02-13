import React, { useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Pictures from './components/Pictures';
import './style/main.scss';

const App = () => {

  const [state, setSate] = useState(null);
  const [error, setError] = useState();

  async function getDogData(breed) {
    return await axios.get(`https://dog.ceo/api/breed/${breed}/images`);
  }

  async function search(breed) {
    try {
      const dog = await getDogData(breed);
      setSate(dog.data);
      clearError();
    } catch (error) {
      setError("Sorry, that breed can not be found");
    }

  }

  function clearError() {
    setError("");
  }

  return (
    <div className="app">
      <section className="app__inner">
        <Search search={search} error={error} setError={setError} clearError={clearError} />
        <Pictures data={state} />
      </section>
    </div>
  );
}

export default App;
