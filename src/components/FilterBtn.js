import '../styles/FilterBtn.scss';
const FilterBtn = (props) => {
 
  return (
    <button onClick={props.handleBtn} className="header__filterbtn">
      {props.text}
    </button>
  );
};
export default FilterBtn;
