 import { Link } from "react-router-dom";
 function Home() {
  return (
 <div>
 <h1>Bienvenue dans notre communauté</h1> 
 
<div className="services">
 <Link to="/community/SMG/SMG"> <img 
src="/SMG.jpg" 
alt="SMG"    />
</Link>
</div>
</div>
);
}
export default Home;
