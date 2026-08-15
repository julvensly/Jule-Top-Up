import { Link,useNavigate } from "react-router-dom";
 function LS() {
 const navigate = useNavigate();
  return ( 
<div>
 <div className="back-button">
 <button onClick={() => navigate(-1)}>‹</button>
 </div>
 <div className="services">
 <Link to="/community/LS/freefirels"> <img src="/freefire.png" 
alt="FreeFire Diamond" />
      </Link>
 </div>
 <div className="services">
 <Link to="/community/LS/pubgLS">
 <img src="/pubg.png" alt="PUBG UC" />
 </Link>
 </div>
 </div>
 );
}
export default LS;
