import { Link } from "react-router-dom"; 
function Home() {
  return ( 
<div> <h1>Bienvenue sur Jule  Top Up</h1>
 <h2>Veuillez choisir  votre service :</h2>
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
