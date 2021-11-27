import { useState, useEffect } from 'react';
import '../styles/App.scss';
import callToApi from '../services/data';
import FiltersItem from './FiltersItem';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);
console.log(data);

  return (
    <div className="App">
      <header className="header">
      <FiltersItem
        data = {data}
        text = {'Industry'}
        />
      </header>
      <main>
      </main>
    </div>
  );
};
export default App;
