import { Link,useNavigate } from "react-router-dom"; 
function SMG() {
const navigate = useNavigate();
  return (
<div>
<div className="back-button">
<button onClick={() => navigate(-1)}>‹</button>
</div>
 
<h1>Bienvenue sur SMG top-up</h1>
 <h2>Nou proposons des services de qualité rapide et fiable :</h2>
<div className="services">
 <Link to="/community/SMG/freefire"> 
     <img src="/freefire.png"
alt="FreeFire Diamond"    />
      </Link>
 </div>
</div> 
);
}
export default SMG;
