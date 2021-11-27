import '../styles/App.scss';

const FiltersItem = (props) => {
  const filterItem = () => {
    const filterIndustry = props.data.map((dat) => dat.industry);
    const noRepeat = filterIndustry.filter((item, index) => {
      return filterIndustry.indexOf(item) === index;
    });
    const sortIndustry = noRepeat.sort(function (a, b) {
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    });
    console.log(sortIndustry);
    return sortIndustry;
  };
  const renderItem = (index) => {
    return(filterItem().map((sortIndustry) => (
      <option key={index} value={sortIndustry}>
        {sortIndustry}
      </option>
    )));
  };
  
  return (
    <form className="header__form">
      <label htmlFor={props.text}>{props.text}</label>
      <select id={props.text} name={props.text}>
        <option id="all" value="all">
          All
        </option>
        {renderItem()}
      </select>
    </form>
  );
};
export default FiltersItem;
