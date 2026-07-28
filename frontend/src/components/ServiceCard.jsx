import { Link } from "react-router-dom"; 
function ServiceCard({ name, price }) {
  return ( 
<div
 className="service-card"> 
      <h3>{name}</h3> 
      <strong>{price}</strong> <br /> 
      <Link to="/order">
        <button>Achte kounye a</button> 
      </Link>
    </div> );
}
export default ServiceCard;
