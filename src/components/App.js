import { useState, useEffect } from 'react';
import '../styles/App.scss';
import callToApi from '../services/data';
import FiltersItem from './FiltersItem';
import CompaniesList from './CompaniesList';

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
        <ul>
        <CompaniesList
        data = {data}/>
        </ul>
      </main>
    </div>
  );
};
export default App;
