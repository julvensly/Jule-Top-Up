import { Link } from "react-router-dom"; 
function Home() {
  return ( 
<div> <h1>Bienvenue sur Jule  Top Up</h1>
 <h2>Veuillez choisir  votre service :</h2>
<div className="services">
 <Link to="/netflix">
        <img src="/netflix.png"
alt="Netflix"   />
 </Link> 
      <Link to="/disney">
        <img src="/disney.png" 
alt="Disney +"   />
</Link>     
 <Link to="/amazonprime">
 <img src="/amazonprime.png"
alt="Amazon Prime Video"   />      
</Link> 
<Link to="/hbomax"> 
        <img src="/hbomax.png"
alt="HBOMax"   />      
</Link>
 <Link to="/spotify">
 <img src="/spotify.png"
alt="Spotify Premium"   />
</Link>
 <Link to="/youtube">
 <img src="/youtube.png"
alt="YouTube Premium"    />     
 </Link>
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
