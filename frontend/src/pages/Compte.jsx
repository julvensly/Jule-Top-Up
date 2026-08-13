import { Link, useNavigate } from "react-router-dom";
 import {  ShoppingBag, MessageCircle, Users, CircleHelp
} from "lucide-react";
function Compte() {
 const navigate = useNavigate();
 const deconnexion  = () => {
    localStorage.removeItem("isLoggedIn"); 
    localStorage.removeItem("role"); navigate("/connexion");
  };
  return (
 <div>
 <div className="back-button"> <button onClick={() => 
        navigate(-1)}>‹</button>
      </div>
 <h1>Mon Compte</h1>
 <p>Bienvenue sur votre compte.</p> 
      <div className="galerie-deux">
        <div className="deux-colonnes">
 <Link to="/orders"  className="menu-link">
            <ShoppingBag size={50} /> <span>Mes commandes</span> 
          </Link>
        </div>
 <div className="deux-colonnes">
 <Link to="/messages"  className="menu-link">
            <MessageCircle size={50} /> <span>Messages</span> </Link> 
        </div>
 <div className="deux-colonnes">
          <Link to="/community" className="menu-link"> <Users 
            size={50} /> <span>Community</span>
          </Link> </div> <div className="deux-colonnes"> <Link 
          to="/contact" className="menu-link">
            <CircleHelp size={50} /> <span>Aide</span> </Link> </div> 
      </div>
    </div> );
}
export default Compte;
