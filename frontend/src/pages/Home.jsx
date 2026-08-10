import { Link } from "react-router-dom"; 
function Home() {
  return ( 
<div> <h1>Bienvenue sur SMG top-up</h1>
 <h2>Nou proposons des services de qualité rapide et fiable :</h2>
<div className="services">
 <Link to="/freefire"> 
     <img src="/freefire.png"
alt="FreeFire Diamond"    />
      </Link>
 <Link to="/pubg">
     <img src="/pubg.png"
alt="PUBG Mobile"   />
</Link>
 </div>
</div> 
);
}
export default Home;
