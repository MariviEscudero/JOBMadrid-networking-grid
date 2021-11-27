import '../styles/FilterBtn.scss';
const FilterBtn = (props) =>{
    
    return (
        <button className="header__filterbtn">{props.text}</button>
    )
}
export default FilterBtn;