import { useState, useEffect } from 'react';
import '../styles/App.scss';
import callToApi from '../services/data';
import FiltersItem from './FiltersItem';
import FilterBtn from './FilterBtn';
import CompaniesList from './CompaniesList';

const App = () => {
  const [data, setData] = useState([]);
  const [filterIndustry, setFilterIndustry] = useState();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    callToApi().then((response) => {
      setData(response)
      setFilteredData(response)
    });
  }, []);

  const handleFilterIndustry = (value) => {
    setFilterIndustry(value)
  };
  const handleBtn = () => {
    if (filterIndustry === 'all') {
      setFilteredData(data)
    } else {
      const filter = data.filter((dat) =>
        dat.industry.includes(filterIndustry)
      );
      setFilteredData(filter)
    }
  };
  return (
    <div className="App">
      <header className="header">
        <FiltersItem
          data={data}
          text={'Industry'}
          handleFilterIndustry={handleFilterIndustry}
          inputValue={filterIndustry}
        />
        <FilterBtn text={'Filter'} handleBtn={handleBtn} />
      </header>
      <main>
        <ul>
          <CompaniesList data={filteredData} />
        </ul>
      </main>
    </div>
  );
};
export default App;
