import { Link } from "react-router-dom"; 
function SMG() {
  return ( 
<div> <h1>Bienvenue sur SMG top-up</h1>
 <h2>Nou proposons des services de qualité rapide et fiable :</h2>
<div className="services">
 <Link to="/freefire"> 
     <img src="/freefire.png"
alt="FreeFire Diamond"    />
      </Link>
 </div>
</div> 
);
}
export default SMG;
