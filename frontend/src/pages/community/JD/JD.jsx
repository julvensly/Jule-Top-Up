import { Link,useNavigate } from "react-router-dom"; 
function JD() {
const navigate = useNavigate();
  return (
<div>
<div className="back-button">
<button onClick={() => navigate(-1)}>‹</button>
</div>
 
<div className="services">
 <Link to="/community/JD/freefirejd"> 
     <img src="/freefire.png"
alt="FreeFire Diamond"    />
      </Link>
</div>
<div className="services">
<Link to="/community/JD/pubgjd"> <img src="/pubg.png"
alt="PUBG UC"    />
</Link>
 </div>
</div> 
);
}
export default JD;
