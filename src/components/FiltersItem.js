import '../styles/App.scss';

const FiltersItem = (props) => {
  const handleFilterIndustry = (ev) => {
    props.handleFilterIndustry(ev.target.value);
  };
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
    return sortIndustry;
  };
  const renderItem = () => {
    return filterItem().map((sortIndustry,index) => (
      <option key={index} value={sortIndustry}>
        {sortIndustry}
      </option>
    ));
  };
  return (
    <form className="header__form">
      <label htmlFor={props.text}>{props.text}</label>
      <select
        id={props.text}
        name={props.text}
        value={props.inputValue}
        onChange={handleFilterIndustry}
      >
        <option id="all" value="all">
          All
        </option>
        {renderItem()}
      </select>
    </form>
  );
};
export default FiltersItem;
