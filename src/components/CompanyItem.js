import '../styles/CompanyItem.scss';
const CompanyItem = (props) =>{
    return (
        <>
         <h1 className="main__list--card__title">{props.companiesData.name}</h1>
         <h2 className="main__list--card__subt">{props.companiesData.founded}</h2>
         <button className="main__list--card__industrybtn" type="text">{props.companiesData.industry}</button>
         <button className="main__list--card__sizebtn" type="text">{props.companiesData.size}</button>
         <a className="main__list--card__link" href={`http://www.${props.companiesData.website}`}target='_blank' rel='noreferrer'>{props.text}</a>
        </>
      );
}
export default CompanyItem;