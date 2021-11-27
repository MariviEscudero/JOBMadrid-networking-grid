import '../styles/CompaniesList.scss';
import CompanyItem from './CompanyItem';
const CompaniesList = (props) => {
  const companiesList = props.data.map((companiesData) => (
    <li key={companiesData.id} className="main__list--card">
      <CompanyItem 
      companiesData={companiesData}
      text={'Website'} />
    </li>
  ));
  return <ul className="main__list">{companiesList}</ul>;
};
export default CompaniesList;
