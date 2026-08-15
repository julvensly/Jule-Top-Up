 import { Link } from "react-router-dom";
 function Home() {
  return (
 <div>
<h2> Bienvenue chez JULE </h2> 
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
